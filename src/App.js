import { Fragment } from "react";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
    </Fragment>
  );
}

export default App;
