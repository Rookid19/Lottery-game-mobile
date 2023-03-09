import "./App.css";
import DrawBalls from "./components/DrawBalls";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Header />
      <DrawBalls />
      <Tabs />
    </div>
  );
}

export default App;
