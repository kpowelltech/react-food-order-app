import React, {useState} from "react";

import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";

import Meals from "./components/Meals/Meals";

const App = () => {

  const [cartIsOpen, setCartIsOpen] = useState(false) 

  const cartShowHandler=()=>{

    if (!cartIsOpen) {
      setCartIsOpen(true)
    } else {
      setCartIsOpen(false)
    }


  }
  return (
    <React.Fragment>
      {cartIsOpen ? <Cart onButtonClick={cartShowHandler}/> : null}
      <Header onButtonClick={cartShowHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
