import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="text-center">
          <a href="https://github.com/ScaraHalley/dictionary-react">
            open source code
          </a>{" "}
          by Sarah Halley
        </footer>
      </div>
    </div>
  );
}

export default App;
