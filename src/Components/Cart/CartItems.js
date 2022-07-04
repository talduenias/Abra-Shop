import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../constants";
const CartItems = ({ cart, setCart }) => {
  const handleRemove = (item) => {
    const data = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart([...data]);
  };

  // console.log(cart);

  return (
    <StyledCartItemsWrapper>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          handleRemove={handleRemove}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 34px;
  overflow-y: auto;

  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
    margin-top: 17px;
    gap: 18px;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export default CartItems;
