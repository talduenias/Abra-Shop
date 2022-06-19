import styled from "styled-components";
import LogoImage from "../../Images/logo.png";
import AccountImage from "../../Images/account_circle.png";
import Menu from "../Common/Menu";

const defaultMenuConfig = [
  { id: 1, name: "BestSellers" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home" },
  { id: 4, name: "Office" },
  { id: 5, name: "Sports" },
];
const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLogo src={LogoImage}></StyledLogo>
      <Menu menuItems={defaultMenuConfig}></Menu>
      <StyledAccountIcon src={AccountImage}></StyledAccountIcon>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: #1a223e;
  display: flex;
  padding: 21px;
  align-items: flex-end;

`;

const StyledLogo = styled.img`
  padding-left:  64px;
  padding-right: 98px;
  align-self: center;
`;

const StyledAccountIcon = styled.img`
  align-self: center;
  margin-left: auto;
  padding-right: 36px;
`;

export default Header;
