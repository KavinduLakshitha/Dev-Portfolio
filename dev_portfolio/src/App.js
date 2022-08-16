import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Helmet from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kavindu Marasinghe</title>
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  );
};

export default App;
