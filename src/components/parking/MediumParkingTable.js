import React from "react";
import MediumParking from "./MediumParking";

const MediumParkingTable = ({ inputDetails }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <MediumParking num={0} inputDetails={inputDetails} />
            </td>
            <td>
              <MediumParking num={1} inputDetails={inputDetails} />
            </td>
            <td>
              <MediumParking num={2} inputDetails={inputDetails} />
            </td>
          </tr>
          <tr>
            <td>
              <MediumParking num={3} inputDetails={inputDetails} />
            </td>
            <td>
              <MediumParking num={4} inputDetails={inputDetails} />
            </td>
            <td>
              <MediumParking num={5} inputDetails={inputDetails} />
            </td>
          </tr>
          <tr>
            <td>
              <MediumParking num={6} inputDetails={inputDetails} />
            </td>
            <td>
              <MediumParking num={7} inputDetails={inputDetails} />
            </td>
            <td>
              <MediumParking num={8} inputDetails={inputDetails} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MediumParkingTable;
