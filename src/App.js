import "./App.css";
import React, { useState } from "react";
import LargeParkingTable from "./components/parking/LargeParkingTable";
import MediumParkingTable from "./components/parking/MediumParkingTable";
import SmallParkingTable from "./components/parking/SmallParkingTable";
function App() {
  const [details, setDetails] = useState({
    occupied: false,
    number: "",
    entrance: "",
    size: "",
    start: new Date(),
    // end: "",
  });

  return (
    <>
      <div className="inputs">
        <h4>Entrance:</h4>
        <input
          maxLength="1"
          placeholder="A, B, C"
          value={details.entrance}
          onChange={(e) => setDetails({ ...details, entrance: e.target.value })}
        />
        <h4>Size: </h4>
        <input
          maxLength="2"
          placeholder="SP, MP, LP"
          value={details.size}
          onChange={(e) => setDetails({ ...details, size: e.target.value })}
        />
        <h4>Parking Number:</h4>
        <input
          maxLength="1"
          placeholder="0 - 8"
          value={details.number}
          onChange={(e) => setDetails({ ...details, number: e.target.value })}
        />
        <span>{`( re-enter to unpark )`}</span>
      </div>
      <div className="Parking">
        <div className="EntryA">
          <h5>Entrance A</h5>
        </div>
        <div className="EntryB">
          <h5>Entrance B</h5>
        </div>
        <div className="EntryC">
          <h5>Entrance C</h5>
        </div>
        <div className="App">
          <div>
            <h2>
              Large Parking <span>{`(LP)`}</span>
            </h2>
            <LargeParkingTable
              inputDetails={details.size === "LP" && details}
            />
          </div>
          <div>
            <h2>
              Medium Parking <span>{`(MP)`}</span>
            </h2>
            <MediumParkingTable
              inputDetails={details.size === "MP" && details}
            />
          </div>
          <div>
            <h2>
              Small Parking <span>{`(SP)`}</span>
            </h2>
            <SmallParkingTable
              inputDetails={details.size === "SP" && details}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
