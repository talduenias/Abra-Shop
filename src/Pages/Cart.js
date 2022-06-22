import styled from "styled-components";
import { deviceSize } from "../constants";
const Cart = () => {
  return (
    <StyledCartWrapper>
      <p>test</p>
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.div`
  flex-basis: 316px;
  min-width: 316px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  @media (max-width: ${deviceSize.mobile}) {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
    min-height: 393px;
    flex-basis: 393px;
    z-index: 5;
  }
`;
export default Cart;
