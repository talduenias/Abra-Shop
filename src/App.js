import styled from "styled-components";
import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";
import ItemsList from "./Components/ItemsList";
import logo from "./logo.svg";
import Cart from "./Pages/Cart";
import ItemsPage from "./Pages/ItemsPage";
import { deviceSize } from "./constants";
function App() {
  return (
    <div className="App">
      <Header />
      <StyledContentWrapper>
        <ItemsPage />
        <Cart />
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
