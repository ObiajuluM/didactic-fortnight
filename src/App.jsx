import "./App.css";
import Joke from "./components/Joke.jsx";

function App() {
  return (
    <div className="page">
      <main className="page-content">
        <h1>Welcome to the Joke App</h1>
        <Joke setup="hi" punchline="hello" />
      </main>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Joke App. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
