import "./App.css";
import potato from "./images/potato.png";

function App() {
  return (
    <div className="App">
      <a
        href="https://maplestory.nexon.net/news"
        target="_blank"
        rel="noreferrer"
      >
        <img id="potato" src={potato} alt="potato" />
      </a>
    </div>
  );
}

export default App;
