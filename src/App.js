import "./App.css";
import Bets from "./components/Bets";
import DrawBalls from "./components/DrawBalls";
import DrawNumbers from "./components/DrawNumbers";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <DrawBalls />
      <Tabs />
      <DrawNumbers />
      <Bets />
    </div>
  );
}

export default App;
