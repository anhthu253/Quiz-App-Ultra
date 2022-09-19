import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cardlist from "./components/card-list/Card-list";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ul className="card-list">
        <Cardlist />
      </ul>
      <Navigation />
    </div>
  );
}

export default App;
