import styled from "styled-components";
import { deviceSize } from "../constants";
import EmptyCart from "../Components/Cart/EmptyCart";
import CartItem from "../Components/Cart/CartItem";
const Cart = () => {
  return (
    <StyledCartWrapper>
      <StyledCartTitle>My cart</StyledCartTitle>
      <CartItem
        name="Black Bottle"
        price={10}
        image={"https://elad-test-1.s3.amazonaws.com/tshirt.png"}
        quantity={5}
      />

      {/* <EmptyCart /> */}
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.div`
  flex-basis: calc(316px - (24px * 2));
  min-width: calc(316px - (24px * 2));
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 40px 24px 0;
  font-family: Assistant;
  height: calc(100vh - 78px - 40px);
  position: relative;
  @media (max-width: ${deviceSize.mobile}) {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
    min-height: 393px;
    flex-basis: 393px;
    z-index: 5;
    padding: 24px 0 0;
  }
`;

const StyledCartTitle = styled.h1`
  font-family: Assistant;
  font-size: 40px;
  font-weight: bold;
  color: #1a223e;
  text-align: center;

  @media (max-width: ${deviceSize.mobile}) {
  }
`;
export default Cart;
