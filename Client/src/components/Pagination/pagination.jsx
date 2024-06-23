import React from "react";
import { Pagination } from "react-bootstrap";
import styles from "../Pagination/pagination.module.css";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <Pagination className={styles.pagination}>
      <Pagination.Prev 
        disabled={currentPage === 1} 
        onClick={() => handleClick(currentPage - 1)} 
      />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item 
          key={index + 1} 
          active={index + 1 === currentPage} 
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next 
        disabled={currentPage === totalPages} 
        onClick={() => handleClick(currentPage + 1)} 
      />
    </Pagination>
  );
};

export default CustomPagination;
