import styled from "styled-components";
import ItemCard from "./ItemCard";
import { deviceSize } from "../../constants";
import { useEffect, useState } from "react";
const ItemsList = ({ items, setCart, cart }) => {
  return (
    <ItemsListWrapper>
      {/* {console.log(items)} */}
      {items.map((item, index) => (
        <ItemCard key={index} item={item} cart={cart} setCart={setCart} />
      ))}
    </ItemsListWrapper>
  );
};

const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px 24px;
  flex-wrap: wrap;
  margin-bottom: 117px;
  @media (max-width: ${deviceSize.mobile}) {
    gap: 20px 18px;
    margin-bottom: 89px;
  }
`;

export default ItemsList;
