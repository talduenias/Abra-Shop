import styled from "styled-components";
import Header from "./Components/Header";
import ItemCard from "./Components/Items/ItemCard";
import ItemsList from "./Components/Items/ItemsList";
import logo from "./logo.svg";
import CartPage from "./Pages/CartPage";
import ItemsPage from "./Pages/ItemsPage";
import { deviceSize } from "./constants";
function App() {
  return (
    <div className="App">
      <Header />
      <StyledContentWrapper>
        <ItemsPage />
        <CartPage />
      </StyledContentWrapper>
    </div>
  );
}

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column-reverse;
  }
`
export default App;
