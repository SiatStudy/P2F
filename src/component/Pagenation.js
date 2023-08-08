import React, { useState, useEffect } from "react";
import {stayJson} from "../json/stayJson";
import {CardOfProduct} from "./CardOfProduct";

import styles from "./Pagenation.module.css"

const ITEMS_PER_PAGE = 6;

export const PaginationContent = ({ mode, selected }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if(mode === "location") {
            const selectData = stayJson.filter(({ locate }) => locate === selected);
            setData(selectData);
        } else if(mode === "stay") {
            const selectData = stayJson.filter(({ title }) => title === selected);
            setData(selectData);
        } else if(mode === "search") {
            const selectData = stayJson.filter(({ title, locate, text }) => title.includes(selected) || locate.includes(selected) || text.name.includes(selected))
            setData(selectData);
        }
    }, [selected]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div className={styles.itemsDiv}>
            <ul className={styles.itemsList}>
                {currentItems.map(({ title, locate, src, text }, index) => {
                    return  <CardOfProduct key={index} item={src} data={text}/>
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