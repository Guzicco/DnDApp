import React from "react";
import { render } from "react-dom";
import GetCategoryData from "./Components/GetCategoryData";

const App = () => {
  return (
    <div>
      <GetCategoryData category="equipment" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
