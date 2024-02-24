import { useState } from "react";

import Topbar from "./components/Topbar/Topbar";
import Info from "./components/Info/Info";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import "./styles/global.scss";
import styles from "./App.module.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={styles.sections}>
        <Info />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
