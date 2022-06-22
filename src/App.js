import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/note.png"
        name="Black T-shirt"
        price="89 NIS"
      />
  </div>)
}

export default App;
