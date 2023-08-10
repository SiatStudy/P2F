import axios from "axios";
import React, { useState, useEffect } from "react";

import { product } from "../apis/product";
import { locationKey } from "../json/locationKey";
import { stayTypeKey } from "../json/stayTypeKey";

import { CardOfProduct } from "./CardOfProduct";

import styles from "./Pagenation.module.css"

const ITEMS_PER_PAGE = 6;

export const PaginationContent = ({ mode, selected }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        if(mode === "location") {
            axios.get(`/main/location?location=${locationKey[selected]}`)
                .then(res => {
                    setData(res.data);
                })
                .catch(err => alert("[ERROR] categories API error"));
        } else if(mode === "stay") {
            axios.get(`/main/category?category=${stayTypeKey[selected]}`)
                .then(res => {
                    setData(res.data);
                })
                .catch(err => alert("[ERROR] categories API error"));
        } else if(mode === "search") {
            axios.get(`/main/category?category=${selected}`)
                .then(res => {
                    setData(res.data);
                })
                .catch(err => alert("[ERROR] categories API error"));
        }
    }, [mode, selected, data]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div className={styles.itemsDiv}>
            <ul className={styles.itemsList}>
                {currentItems.map(( data) => {
                    return  <CardOfProduct src={`${process.env.PUBLIC_URL}/asset/img/main/MainPage_추천_img.jpg`} data={data}/>
                })}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(data.length / ITEMS_PER_PAGE)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className={styles.btnDiv}>
            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? styles.activeBtn : styles.nonActiveBtn}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};