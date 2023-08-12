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
            product("locate", locationKey[selected])
                .then(res => {
                    setData(res.data);
                });
        } else if(mode === "stay") {
            product("location", stayTypeKey[selected])
                .then(res => {
                    setData(res.data);
                });
        } else if(mode === "search") {
            product("search", selected)
                .then(res => {
                    setData(res.data);
                });
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

    const getPageRange = () => {
        const visiblePageCount = 5;
        const pageRange = [];

        if (totalPages <= visiblePageCount) {
            return pageNumbers;
        }

        if (currentPage <= Math.ceil(visiblePageCount / 2)) {
            return [...pageNumbers.slice(0, visiblePageCount), '...', totalPages];
        }

        if (currentPage >= totalPages - Math.floor(visiblePageCount / 2)) {
            return [1, '...', ...pageNumbers.slice(totalPages - visiblePageCount + 1)];
        }

        const start = currentPage - Math.floor(visiblePageCount / 2);
        const end = currentPage + Math.floor(visiblePageCount / 2);
        return [1, '...', ...pageNumbers.slice(start - 1, end), '...', totalPages];
    };

    return (
        <div className={styles.btnDiv}>
            {getPageRange().map((page, index) => (
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