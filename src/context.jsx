import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [product, SetProduct] = useState([]);
  const [cart, SetCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => SetProduct(res.data));
  }, []);
  return (
    <Context.Provider value={{ product, cart, SetCart, SetCart }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
