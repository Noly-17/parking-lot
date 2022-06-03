import React, { useState } from "react";
import LargeParking from "./LargeParking";

const LargeParkingTable = ({ inputDetails }) => {
  console.log(inputDetails);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <LargeParking num={0} inputDetails={inputDetails} />
            </td>
            <td>
              <LargeParking num={1} inputDetails={inputDetails} />
            </td>
            <td>
              <LargeParking num={2} inputDetails={inputDetails} />
            </td>
          </tr>
          <tr>
            <td>
              <LargeParking num={3} inputDetails={inputDetails} />
            </td>
            <td>
              <LargeParking num={4} inputDetails={inputDetails} />
            </td>
            <td>
              <LargeParking num={5} inputDetails={inputDetails} />
            </td>
          </tr>
          <tr>
            <td>
              <LargeParking num={6} inputDetails={inputDetails} />
            </td>
            <td>
              <LargeParking num={7} inputDetails={inputDetails} />
            </td>
            <td>
              <LargeParking num={8} inputDetails={inputDetails} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LargeParkingTable;
