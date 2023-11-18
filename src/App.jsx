import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData); //sets state 
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; // "Low", "Medium", "High"
  const filterByType = (currentType) => { //filtering to match all data of the same orbit type (all "Low"'s, "Medium"'s, "High"'s)
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    console.log(sat)
    setSat(displaySats);
    console.log(sat)
  };
  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;