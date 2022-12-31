import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { NewCar } from "./NewCar";
import { UsedCar } from "./UsedCar";
import { SellCar } from "./SellCar";
import { NewsReviews } from "./NewsReviews";
export const Header = () => {  
  return (
    <div className="header">     
      <NewCar/>
      <UsedCar/>
      <SellCar/>
      <NewsReviews/>
      <Link to="#"> COMPARE CARS</Link>
       {/* <ul className="menu">
        <li>
          <Link to="#" className="link">
            <Typography className="text">COMPARE CARS</Typography>
            <ArrowDropDownIcon className="text"/>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <Typography className="text">NEWS & REVIEWS</Typography>
            <ArrowDropDownIcon className="text"/>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <Typography className="text">CARDEKHO VENTURES</Typography>
            <ArrowDropDownIcon  className="text"/>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <Typography className="text">MORE</Typography>
            <ArrowDropDownIcon className="text"/>
          </Link>
        </li>
      </ul> */}
      {/* </div> */}

      {/* 2nd div........... */}
      <div className="rightDiv">
        <p> Select City </p>
      </div>

      {/*<div className="">
      <div>
            <Typography>NEW CAR</Typography>
            <ArrowDropDownIcon />
            </div>
            </div> */}
      {/*<div>
         <div className="flex">
            <Typography>USED CAR</Typography>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div>
          <Typography>SELL CAR</Typography>
        </div>
        <div>
          <Typography>COMPARE CARS</Typography>
        </div>
        <div>
          <Typography>NEWS & REVIEWS</Typography>
        </div>
        <div>
          <Typography>CARDEKHO VENTURES</Typography>
        </div>
        <div>
          <Typography>MORE</Typography>
        </div> */}
    </div>
  );
};
