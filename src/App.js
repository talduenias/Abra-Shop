import styled from "styled-components";
import Header from "./Components/Header";
import ItemCard from "./Components/Items/ItemCard";
import ItemsList from "./Components/Items/ItemsList";
import logo from "./logo.svg";
import CartPage from "./Pages/CartPage";
import ItemsPage from "./Pages/ItemsPage";
import EmptyCart from "./Components/Cart/EmptyCart";
import { deviceSize } from "./constants";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://elad-test-1.s3.amazonaws.com/items.json"
      );
      const data = await response.json();
      const newData = data.map((obj) => ({ ...obj, order: 0 }));

      setItems(newData);

      return data;
    };
    fetchData();
  }, []);
  const pathLinks = [
    "/",
    "best-seller",
    "clothing",
    "home",
    "office",
    "sports",
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <StyledContentWrapper>
          <Routes>
            {pathLinks.map((path) => {
              return (
                <Route
                  path={path}
                  element={
                    <ItemsPage items={items} cart={cart} setCart={setCart} />
                  }
                />
              );
            })}
          </Routes>

          <CartPage cart={cart} setCart={setCart} items={items} />
        </StyledContentWrapper>
      </div>
    </BrowserRouter>
  );
}

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column-reverse;
  }
`;
export default App;
