import styled from "styled-components";
import Button from "../Common/Button";
import { useState } from "react";

import { deviceSize } from "../../constants";

const ItemCard = ({ item, setCart, cart }) => {
  const [disabled, setDisabled] = useState(false);

  const addToBag = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    // console.log(itemIndex, "findIndex");

    if (itemIndex >= 0) {
      if (item.quantity > item.order) {
        cart[itemIndex].order++;
        setCart([...cart]);
      } else if ((item.quantity = item.order)) {
        setDisabled(true);

        alert("out of stock");
      }
    } else {
      item.order = 1;
      setCart((prevState) => [...prevState, item]);
    }
  };
  return (
    <>
      <StyledItemWrapper>
        <StyledItemImage src={item.image}></StyledItemImage>
        <StyledItemName>{item.name}</StyledItemName>
        <StyledItemPrice>{item.price}</StyledItemPrice>
        <StyledAddToBagButton onClick={() => addToBag(item)}>
          ADD TO BAG
        </StyledAddToBagButton>
      </StyledItemWrapper>
    </>
  );
};

const StyledItemWrapper = styled.div`
  width: 292px;
  font-family: Assistant;
  font-size: 20px;
  line-height: 1;
  text-align: center;

  @media (max-width: ${deviceSize.mobile}) {
    width: 160px;
    font-size: 16px;
  }
`;
const StyledItemImage = styled.img`
  width: 292px;
  height: 292px;
  display: block;
  margin-bottom: 16px;
  @media (max-width: ${deviceSize.mobile}) {
    width: 160px;
    height: 160px;
  }
`;
const StyledItemName = styled.span`
  display: block;
`;
const StyledItemPrice = styled.span`
  display: block;
  color: #808285;
  margin-top: 8px;
  margin-bottom: 16px;
`;
const StyledAddToBagButton = styled(Button)`
  :disabled {
    border: solid 1px #808080;
    background-color: red;
    color: #fff;
  }
  @media (max-width: ${deviceSize.mobile}) {
    padding: 8px 0;
    font-size: 14px;
  }
`;

export default ItemCard;
