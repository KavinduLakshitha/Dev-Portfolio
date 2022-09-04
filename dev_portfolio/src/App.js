import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Helmet from "react-helmet";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kavindu Marasinghe</title>
        <link rel="canonical" href="/" />
      </Helmet>

      <div>
        <Navbar />
        <Home />
        <Projects />
        <About />
      </div>

      {loading ? (
        <HashLoader
          className="loader"
          loading={loading}
          size={80}
          color={"#94bbe9"}
        />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Projects />
          <About />
        </div>
      )}
    </div>
  );
}

export default App;
