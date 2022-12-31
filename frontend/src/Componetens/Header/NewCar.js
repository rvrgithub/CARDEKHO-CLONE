import React from 'react'
import "./Header.css";
import {
    Typography,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import { display } from "@mui/system";
  import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const NewCar = () => {
    const populerBrand=[
        {to:"#",title:"Maruti Suzuki Cars"},
        {to:"#",title:"Citroen Cars"},
        {to:"#",title:"Hyundai Cars"},
        {to:"#",title:"Tata Cars"},
        {to:"#",title:"Mahindra Cars"},
        {to:"#",title:"Kia Cars"}
       ] ;
       const populerCars=[
        {to:"#",title:"Mahindra Scorpio-N"},
        {to:"#",title:"Maruti Swift"},
        {to:"#",title:"Citroen C3"},
        {to:"#",title:"Renault Kiger"},
        {to:"#",title:"Kia Seltos"},
        {to:"#",title:"Renault Triber"},
        {to:"#", title:"Skoda Octavia"}
       ] 
  return (
    <ul className="menu">
        <li>
          <Link to="#" className="link">
            <Typography className="text">NEW CAR</Typography>
            <ArrowDropDownIcon />
          </Link>
          <ul className="submenu">
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>Search New Cars</Typography>
              </Link>
              
            </li>
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>Popular Brand</Typography>
              </Link>
              <ul className="submenu2">
                <li>
                  {populerBrand.map((e)=>(
                    <Link to={e.to} className="link">
                    <Typography>{e.title}</Typography>
                  </Link>
                  ))}
                </li>
              </ul>
            </li>{" "}
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>Upcomming Cars</Typography>
              </Link>
              
            </li>
            <li>
              {" "}
              <Link to="#" className="link">
                <Typography>Popular Cars</Typography>
              </Link>
              <ul className="submenu2">
                <li>
                  {populerCars.map((e)=>(
                    <Link to={e.to} className="link">
                    <Typography>{e.title}</Typography>
                  </Link>
                  ))}
                </li>
              </ul>
            </li>{" "}
            <li>
            <Link to="#" className="link">
                    <Typography>Electric Cars</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Electric Charging STation</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Suggest Me a Car</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>BS6 Cars</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Offers and Dicsount</Typography>
                  </Link>
            </li>

            <li>
            <Link to="#" className="link">
                    <Typography>Serviec Centers</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Dealers</Typography>
                  </Link>
            </li>
            <li>
            <Link to="#" className="link">
                    <Typography>Win iphone</Typography>
                  </Link>
            </li>
          </ul>
        </li>
        </ul>
  )
}
