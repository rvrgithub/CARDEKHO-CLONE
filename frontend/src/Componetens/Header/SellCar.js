import React from "react";
import "./Header.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export const SellCar = () => {
  const City = [
    { to: "#", title: "Ahmedabad" },
    { to: "#", title: "Benglore" },
    { to: "#", title: "Chennai" },
    { to: "#", title: "Delhi" },
    { to: "#", title: "Hydrabad" },
    { to: "#", title: "Jaipur" },
    { to: "#", title: "Kolkata" },
    { to: "#", title: "Mumbai" },
    { to: "#", title: "Pune" },
    { to: "#", title: "More Ccites" },
  ];
  return (
    <ul className="menu">
      <li>
        <div className="flex">
          <Link to="#" className="link">
            <p className="text">SELL CAR</p>
            <ArrowDropDownIcon className="text" />
          </Link>
        </div>
        <ul className="submenu">
          <li>
            <Link to="#" className="link">
              <Typography className="text">Sell Car in Your City</Typography>
              <ArrowRightIcon className="rightArrow" />
            </Link>
            <ul className="submenu2">
              {City.map((e,i) => (
                <li key={i}>
                  <Link to={e.to} className="link">
                    <Typography>{e.title}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            {" "}
            <Link to="#" className="link">
              <Typography>Used Car Valuation</Typography>
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="#" className="link">
              <Typography>Sell Car by Brands</Typography>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#" className="link">
              <Typography>Scrap my car</Typography>
            </Link>
          </li>{" "}
          <li>
            <Link to="#" className="link">
              <Typography>How it works?</Typography>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <Typography>FAQs</Typography>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
