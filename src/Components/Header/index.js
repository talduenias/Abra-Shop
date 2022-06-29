import styled from "styled-components";
import LogoImage from "../../Images/logo.png";
import AccountImage from "../../Images/account_circle.png";
import Menu from "../Common/Menu";
import { useState } from "react";
import { deviceSize } from "../../constants";
import { Routes, Route, Link } from "react-router-dom";

const defaultMenuConfig = [
  { id: 1, name: "Best-Seller" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home" },
  { id: 4, name: "Office" },
  { id: 5, name: "Sports" },
];

const DEFAULT_MENU_ITEM = 1;
const Header = () => {
  const onMenuItemChanged = (item) => {
    setActiveMenuItem(item.id);
  };
  const [activeMenuItem, setActiveMenuItem] = useState(DEFAULT_MENU_ITEM);
  return (
    <StyledHeaderWrapper>
      <StyledLogo src={LogoImage}></StyledLogo>
      <StyledMenu
        activeId={activeMenuItem}
        onMenuItemChanged={onMenuItemChanged}
        menuItems={defaultMenuConfig}
      ></StyledMenu>
      <StyledAccountIcon src={AccountImage}></StyledAccountIcon>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header`
  background-color: #1a223e;
  display: flex;
  padding: 21px 0px;
  padding-left: 64px;

  align-items: flex-end;
  @media (max-width: ${deviceSize.mobile}) {
    padding-left: 18px;
  }
`;

const StyledMenu = styled(Menu)`
  @media (max-width: ${deviceSize.mobile}) {
    padding-right: 66px;
    order: -1;
  }
`;
const StyledLogo = styled.img`
  padding-right: 98px;
  align-self: center;
`;

const StyledAccountIcon = styled.img`
  align-self: center;
  margin-left: auto;
  padding-right: 24px;
`;

export default Header;
