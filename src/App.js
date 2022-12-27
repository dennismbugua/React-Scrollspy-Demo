import { useState, createRef } from "react";
import LayoutContext from "./components/LayoutContext";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import "./global.css";
import ScrollSpy from "react-scrollspy-navigation";
import FancyButton from "./components/FancyButton";

export default function App() {
  const [isColumn, setIsColumn] = useState(true);
  const styleLayoutColumn = {
    flexDirection: isColumn ? "column" : "row"
  };

  return (
    <LayoutContext.Provider value={[isColumn, setIsColumn]}>
      <div className="App" style={styleLayoutColumn}>
        <Navigation />
        <div className="parent-section">
          <Section id="box-1" color="red">
            Box 1
          </Section>
          <Section id="box-2" color="blue">
            Box 2
          </Section>
          <Section id="box-3" color="green">
            Box 3
          </Section>
          <Section id="box-4" color="red">
            Box 4
          </Section>
          <Section id="box-5" color="blue">
            Box 5
          </Section>
          <Section id="box-6" color="green">
            Box 6
          </Section>
        </div>
      </div>
    </LayoutContext.Provider>
  );
}
