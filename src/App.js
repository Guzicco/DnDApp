import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Axios from "axios";
import GetCategoryData from "./Components/GetCategoryData";
import NavigationBar from "./Components/NavigationBar";
import AsideNavBar from "./Components/AsideNavBar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

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

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading) {
    return "Page is Loading";
  }

  return (
    <div>
      <NavigationBar />
      <main className="container-fluid">
        <div className="row">
          <AsideNavBar categories={categories} />
          <section id="categoryContent" className="col-10">
            <GetCategoryData category="equipment" />
          </section>
        </div>
      </main>
    </div>
  );
};

render(<App />, document.getElementById("root"));
