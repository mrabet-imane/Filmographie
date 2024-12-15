import React, { useState } from "react";
import "../App.css"; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handleClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handleClick(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <span> Page {currentPage} of {totalPages} </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
