import React from "react";

const CategoryItemsList = ({ categoryData, isLoadingData }) => {
  if (isLoadingData) {
    return <div>Loading Data</div>;
  } else if (categoryData.length === 0) {
    return <div>Choose Category</div>;
  }

  return categoryData.map(item => <div key={item.index}>{item.name}</div>);
};

export default CategoryItemsList;
