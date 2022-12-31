import React from 'react'
import "./Header.css";
import {
    Typography,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import { display } from "@mui/system";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const NewsReviews = () => {
    const CarNews=[
        {to:"#",title:"Car News"},
        {to:"#",title:"Feature Stories"},
        {to:"#",title:"Car Collectios"},
        {to:"#",title:"Car Selling Tips"},
        {to:"#",title:"User Reviews"},
        {to:"#",title:"Road Test"},
        {to:"#",title:"Video Reviews"},
        {to:"#",title:"Write a Reivews"},
        {to:"#",title:"car Visual Stories"},
       ] ; 
  return (
    <ul className="menu">
      <li>
          <Link to="#" className="link">
            <Typography className="text">NEWS & REVIEWS</Typography>
            <ArrowDropDownIcon />
          </Link>
          <ul className="submenu">
                <li>
                  {CarNews.map((e)=>(
                    <Link to={e.to} className="link">
                    <Typography>{e.title}</Typography>
                  </Link>
                  ))}
                </li>
              </ul>
          </li>    
        </ul>
  )
}
