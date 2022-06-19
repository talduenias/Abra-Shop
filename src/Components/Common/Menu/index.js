import styled from "styled-components";

const Menu = ({ menuItems }) => {
  return (
    <MenuWrapper>
      {menuItems.map((item) => {
        return <MenuItem>{item.name}</MenuItem>;
      })}
    </MenuWrapper>
  );
};

const MenuItem = styled.a`
  font-size: 20px;
  font-weight: 500;

  color: #fff;
`;
const MenuWrapper = styled.nav`
  font-family: Assistant;
  display: flex;
  gap: 26px;
`;

export default Menu;
