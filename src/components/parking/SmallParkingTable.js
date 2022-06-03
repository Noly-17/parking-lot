import React from "react";
import SmallParking from "./SmallParking";

const SmallParkingTable = ({ inputDetails }) => {
  console.log(inputDetails);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <SmallParking num={0} inputDetails={inputDetails} />
            </td>
            <td>
              <SmallParking num={1} inputDetails={inputDetails} />
            </td>
            <td>
              <SmallParking num={2} inputDetails={inputDetails} />
            </td>
          </tr>
          <tr>
            <td>
              <SmallParking num={3} inputDetails={inputDetails} />
            </td>
            <td>
              <SmallParking num={4} inputDetails={inputDetails} />
            </td>
            <td>
              <SmallParking num={5} inputDetails={inputDetails} />
            </td>
          </tr>
          <tr>
            <td>
              <SmallParking num={6} inputDetails={inputDetails} />
            </td>
            <td>
              <SmallParking num={7} inputDetails={inputDetails} />
            </td>
            <td>
              <SmallParking num={8} inputDetails={inputDetails} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SmallParkingTable;
