import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Axios from "axios";
import GetCategoryData from "./Components/CategoryItemsList";
import NavigationBar from "./Components/NavigationBar";
import AsideNavBar from "./Components/AsideNavBar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("default");
  const [isloadingData, setIsLoadingData] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const callbackActiveCategory = chosenCategory => {
    setActiveCategory(chosenCategory);
  };

  const fetchCategories = () => {
    setIsLoading(true);
    try {
      Axios.get(`http://www.dnd5eapi.co/api`)
        .then(Response => {
          setCategories(Object.keys(Response.data));
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategoryData = () => {
    if (activeCategory === "default") return;
    setIsLoadingData(true);
    try {
      Axios.get(`http://www.dnd5eapi.co/api/${activeCategory}`)
        .then(Response => {
          setCategoryData(Response.data.results);
          setIsLoadingData(false);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchCategoryData();
  }, [activeCategory]);

  if (isLoading) {
    return "Page is Loading";
  }

  return (
    <div>
      <NavigationBar />
      <main className="container-fluid">
        <div className="row">
          <AsideNavBar
            categories={categories}
            callback={callbackActiveCategory}
          />
          <section id="categoryContent" className="col-10">
            <GetCategoryData
              categoryData={categoryData}
              isLoadingData={isloadingData}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

render(<App />, document.getElementById("root"));
