/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

const Pagination = ({ data, itemsPerPage, isLoadingData }) => {
  const [numOfPages, setNumOfPages] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [displayItems, setDisplayItems] = useState([]);

  const changePageHandler = event => {
    let input = event.target.innerText;
    if (input === "<<") {
      setActivePage(1);
    } else if (input === "<") {
      setActivePage(activePage === 1 ? 1 : activePage - 1);
    } else if (input === ">") {
      setActivePage(activePage === numOfPages ? numOfPages : activePage + 1);
    } else if (input === ">>") {
      setActivePage(numOfPages);
    } else {
      setActivePage(Number(input));
    }
  };

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

  return (
    <section>
      {numOfPages == 1 ? null : (
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={changePageHandler}>
                {"<<"}
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" onClick={changePageHandler}>
                {"<"}
              </a>
            </li>
            {[...Array(numOfPages)].map((_, index) => (
              <li key={"page" + index} className="page-item">
                <a href="#" className="page-link" onClick={changePageHandler}>
                  {index + 1}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={changePageHandler}>
                {">"}
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" onClick={changePageHandler}>
                {">>"}
              </a>
            </li>
          </ul>
        </nav>
      )}
      <div>
        {displayItems.map(item => (
          <div key={item.index}>{item.name || item.class}</div>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
