import React, { useState, useEffect } from "react";
import Axios from "axios";

const GetCategoryData = ({ category }) => {
  const [loadingData, setLoadingData] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const fetchCategoryData = () => {
    setLoadingData(true);
    try {
      Axios.get(`http://www.dnd5eapi.co/api/${category}`)
        .then(Response => {
          console.log(Response);
          setCategoryData(Response.data.results);
          setLoadingData(false);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchCategoryData(), [category]);

  if (loadingData) {
    return <div>Loading Data</div>;
  }
  return categoryData.map(item => <div key={item.index}>{item.name}</div>);
};

export default GetCategoryData;
