import React from "react";
import "./Header.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const More = () => {
  const CarNews = [
    { to: "#", title: "Car Loan" },
    { to: "#", title: "EMI Calculator" },
    { to: "#", title: "Ask A Questio" },
    { to: "#", title: "Careers with us" },
  ];
  return (
    <ul className="menu">
      <li>
        <div className="flex">
          <Link to="#" className="link">
            <p className="text">MORE</p>
            <ArrowDropDownIcon className="text" />
          </Link>
        </div>
        <ul className="submenu">
          {CarNews.map((e,i) => (
            <li key={i}>
              <Link to={e.to} className="link">
                <Typography>{e.title}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
