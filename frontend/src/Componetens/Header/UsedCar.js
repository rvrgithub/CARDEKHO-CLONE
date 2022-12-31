import React from 'react'
import "./Header.css";
import {
    Typography,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import { display } from "@mui/system";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const UsedCar = () => {
    const City=[
        {to:"#",title:"Ahmedabad"},
        {to:"#",title:"Benglore"},
        {to:"#",title:"Chennai"},
        {to:"#",title:"Delhi"},
        {to:"#",title:"Hydrabad"},
        {to:"#",title:"Jaipur"},
        {to:"#",title:"Kolkata"},
        {to:"#",title:"Mumbai"},
        {to:"#",title:"Pune"},
        {to:"#",title:"More Ccites"},
       ] ; 
  return (
    <ul className="menu">
      <li>
          <Link to="#" className="link">
            <Typography className="text">Used Car</Typography>
            <ArrowDropDownIcon />
          </Link>
          </li>
        <li>
          <Link to="#" className="link">
            <Typography className="text">Cars I Your City</Typography>
            <ArrowDropDownIcon />
          </Link>
              <ul className="submenu">
                <li>
                  {City.map((e)=>(
                    <Link to={e.to} className="link">
                    <Typography>{e.title}</Typography>
                  </Link>
                  ))}
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>CarDekho Used Cars</Typography>
              </Link>
              
            </li>{" "}
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>CarDekho Used Car Stores</Typography>
              </Link>
              
            </li>
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>Sell Used Car</Typography>
              </Link>
            </li>{" "}
            <li>
            <Link to="#" className="link">
                    <Typography>Scrap my car</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Used Car Dealers</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Used Cas Loan</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>My Listing</Typography>
                  </Link>
            </li>
        </ul>
  )
}
