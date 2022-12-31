import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { NewCar } from "./NewCar";
import { UsedCar } from "./UsedCar";
import { SellCar } from "./SellCar";
import { NewsReviews } from "./NewsReviews";
import { Cardekho } from "./Cardekho";
import { More } from "./More";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const Header = () => {
  return (
    <div className="header">
      <div className="leftDiv">
        <NewCar />
        <UsedCar />
        <SellCar />
        <Link to="#" className="link compare">
          <p>COMPARE CARS</p>
        </Link>
        <NewsReviews />
        <Cardekho />
        <More />
      </div>
      <div className="rightDiv">
      <LocationOnIcon className="text"/>
        <p className="select">Select City </p>
        <ArrowDropDownIcon className="text" />
      </div>
    </div>
  );
};
