import React, { useEffect, useState } from "react";
import "./style.css";
const SmallParking = ({ num, inputDetails }) => {
  // const [isOccupied, setIsOccupied] = useState("");
  const { entry, size, number } = inputDetails;
  console.log(inputDetails);

  const [cells, setCells] = useState(
    Array(9).fill({
      occupied: false,
      number: "",
      entrance: "",
      size: "",
      start: "",
      end: "",
    })
  );

  const handleClick = async () => {
    let boxes = [...cells];

    console.log(cells);
    if (num === parseInt(number) && boxes[num].occupied === false) {
      try {
        const confirmBox = window.confirm("Do you really want to park?");
        if (confirmBox === true) {
          boxes[num] = inputDetails;
          boxes[num].occupied = true;
          boxes[num].start = new Date();
        }
      } catch (err) {
        console.log(err);
      }
    } else if (num === parseInt(number) && boxes[num].occupied === true) {
      try {
        const confirmBox = window.confirm("Do you really want to unpark?");
        if (confirmBox === true) {
          boxes[num].occupied = false;
          boxes[num].end = new Date();
          unPark();
        }
      } catch (err) {
        console.log(err);
      }
    }
    await setCells(boxes);
    await console.log(boxes);
  };

  const unPark = () => {
    let cellsBox = [...cells];
    let date1 = cellsBox[num].start;

    let diff = new Date() - date1;
    let totalPayable = computeCharge(cellsBox[num].size, diff);
    alert(`Total charges: P ${totalPayable}`);
  };

  const computeCharge = (size, totalTime) => {
    let remainingTime = totalTime;
    let t24 = 1000 * 60 * 24;
    let t1h = 1000 * 60;
    let charges = 0;

    var hourlyCharge = 0;

    if (size == "SP") {
      hourlyCharge = 20;
    } else if (size == "MP") {
      hourlyCharge = 60;
    } else if (size == "LP") {
      hourlyCharge = 100;
    } else {
      hourlyCharge = 0;
    }

    if (remainingTime > t24) {
      let n24 = parseInt(2000 / t24);
      charges += n24 * 5000;
      remainingTime -= n24 * t24;
    }

    if (remainingTime > t1h * 3) {
      remainingTime -= t1h * 3;
      charges += 40;
    }

    if (remainingTime > 0) {
      let remainingHours = Math.ceil(remainingTime / t1h);
      charges += remainingHours * hourlyCharge;
    }
    console.log("CHARGES: ", charges);
    return charges;
  };

  // const clear = () => {
  //   if (boxes[num].occupied === false) {
  //     unPark();
  //   }
  // };

  useEffect(() => {
    handleClick();
  }, [inputDetails]);

  let boxes = [...cells];
  console.log(boxes);

  return (
    <div className="container">
      <div className="small-parking" onClick={handleClick}>
        {boxes[num].occupied === true ? (
          <>
            <h4>Occupied</h4>
            <p>Parking #{boxes[num].number}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SmallParking;
