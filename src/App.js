import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router, Link, Switch } from "react-router-dom";
import Axios from "axios";
import Pagination from "./Components/Pagination";
import NavigationBar from "./Components/NavigationBar";
import AsideNavBar from "./Components/AsideNavBar";

const App = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("default");
  const [isloadingData, setIsLoadingData] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const callbackActiveCategory = chosenCategory => {
    setActiveCategory(chosenCategory);
  };

  const fetchCategories = () => {
    setIsPageLoading(true);
    try {
      Axios.get(`http://www.dnd5eapi.co/api`)
        .then(Response => {
          const categList = Object.keys(Response.data);
          categList.forEach(item => item.replace("-", " "));
          console.log(categList);
          setCategories(Object.keys(Response.data));
          setIsPageLoading(false);
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

  if (isPageLoading) {
    return "Page is Loading";
  }

  return (
    <Router>
      <div>
        <NavigationBar />
        <main className="container-fluid">
          <div className="row">
            <AsideNavBar
              categories={categories}
              callback={callbackActiveCategory}
            />
            <section id="categoryContent" className="col-10">
              <div className="col-2">
                <Pagination
                  data={categoryData}
                  isLoadingData={isloadingData}
                  itemsPerPage={20}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
