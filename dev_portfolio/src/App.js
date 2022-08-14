import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
