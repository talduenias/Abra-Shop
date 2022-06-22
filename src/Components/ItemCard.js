import styled from "styled-components";
import Button from "./Common/Button";

const ItemCard = ({ image, name, price }) => {
  return (
    <>
      <StyledItemWrapper>
        <StyledItemImage src={image}></StyledItemImage>
        <StyledItemName>{name}</StyledItemName>
        <StyledItemPrice>{price}</StyledItemPrice>
        <StyledAddToBagButton>ADD TO BAG</StyledAddToBagButton>
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
`;
const StyledItemImage = styled.img`
  width: 292px;
  height: 292px;
  display: block;
  margin-bottom: 16px;
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
const StyledAddToBagButton = styled(Button)``;

export default ItemCard;
