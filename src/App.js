import "./App.css";
import Bets from "./components/Bets";
import DrawBalls from "./components/DrawBalls";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <DrawBalls />
      <Tabs />
      <Bets />
    </div>
  );
}

export default App;
