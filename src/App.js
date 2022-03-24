import React from "react";

import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";

import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <React.Fragment>
      {/* <Cart /> */}
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;