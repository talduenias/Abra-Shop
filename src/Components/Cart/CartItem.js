import styled from "styled-components";
import DeleteButtonImage from "../../Images/delete.svg";
import { deviceSize } from "../../constants";
const CartItem = ({ item, handleRemove }) => {
  return (
    <StyledCartItemWrapper>
      <StyledCartItemImage src={item.image}></StyledCartItemImage>
      <StyledCartItemDetailsWrapper>
        <StyledCartItemTitle>{item.name}</StyledCartItemTitle>
        <StyledCartItemPrice>{item.price} ILS</StyledCartItemPrice>
        <StyledCartItemQuantity>- {item.order} +</StyledCartItemQuantity>
      </StyledCartItemDetailsWrapper>
      <StyledDeleteButtonImage
        src={DeleteButtonImage}
        onClick={() => handleRemove(item)}
      />
    </StyledCartItemWrapper>
  );
};

const StyledCartItemWrapper = styled.div`
  font-family: Assistant;

  font-size: 20px;
  line-height: 1;
  display: flex;
  gap: 11px;
  position: relative;
  @media (max-width: ${deviceSize.mobile}) {
    gap: 0px;
    width: 125px;
    flex-direction: column;
    font-size: 16px;
  } ;
`;

const StyledCartItemImage = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: ${deviceSize.mobile}) {
    position: relative;
    width: 125px;
    height: 125px;
  } ;
`;

const StyledCartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${deviceSize.mobile}) {
    gap: 0px;
  }
`;

const StyledCartItemTitle = styled.span`
  color: #000;
  @media (max-width: ${deviceSize.mobile}) {
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;

const StyledCartItemPrice = styled.span`
  color: #808285;
  @media (max-width: ${deviceSize.mobile}) {
    font-size: 14px;
  }
`;

const StyledCartItemQuantity = styled.span`
  color: #808285;
  margin-top: auto;
  @media (max-width: ${deviceSize.mobile}) {
    margin-top: 12px;
  }
`;

const StyledDeleteButtonImage = styled.img`
  position: absolute;
  cursor: pointer;
  bottom: 0;
  right: 0px;
  @media (max-width: ${deviceSize.mobile}) {
    top: 8px;
    right: 8px;
  } ;
`;

export default CartItem;
