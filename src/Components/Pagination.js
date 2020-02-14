import React, { useState, useEffect } from "react";

const Pagination = ({ data, itemsPerPage, isLoadingData }) => {
  const [numOfPages, setNumOfPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    setNumOfPages(Math.ceil(data.length / itemsPerPage));
  }, [itemsPerPage, data]);

  useEffect(() => {
    setDisplayItems(
      data.filter(
        (_, index) =>
          index >= itemsPerPage * (activePage - 1) &&
          index <= itemsPerPage * activePage - 1
      )
    );
  }, [activePage, data, numOfPages]);

  if (isLoadingData) {
    return <div>Loading Data</div>;
  } else if (data.length === 0) {
    return <div>Choose Category</div>;
  }

  return displayItems.map(item => <div key={item.index}>{item.name}</div>);
};

export default Pagination;
