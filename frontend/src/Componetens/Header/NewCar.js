import React from "react";
import "./Header.css";
import { p } from "@material-ui/core";
import { Link } from "react-router-dom";
import { display } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export const NewCar = () => {
  const populerBrand = [
    { to: "#", title: "Maruti Suzuki Cars" },
    { to: "#", title: "Citroen Cars" },
    { to: "#", title: "Hyundai Cars" },
    { to: "#", title: "Tata Cars" },
    { to: "#", title: "Mahindra Cars" },
    { to: "#", title: "Kia Cars" },
  ];
  const populerCars = [
    { to: "#", title: "Mahindra Scorpio-N" },
    { to: "#", title: "Maruti Swift" },
    { to: "#", title: "Citroen C3" },
    { to: "#", title: "Renault Kiger" },
    { to: "#", title: "Kia Seltos" },
    { to: "#", title: "Renault Triber" },
    { to: "#", title: "Skoda Octavia" },
  ];
  return (
    <ul className="menu">
      <li>
        <div className="flex">
          <Link to="#" className="link">
            <p className="text">NEW CAR</p>
            <ArrowDropDownIcon className="text" />
          </Link>
        </div>
        <ul className="submenu">
          <li>
            {" "}
            <Link to="#" className="link">
              <p>Search New Cars</p>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#" className="link">
              <p>Popular Brand</p>
              <ArrowRightIcon className="rightArrow" />
            </Link>
            <ul className="submenu2">
              {populerBrand.map((e,i) => (
                <li key={i}>
                  <Link to={e.to} className="link">
                    <p>{e.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>{" "}
          <li>
            {" "}
            <Link to="#" className="link">
              <p>Upcomming Cars</p>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#" className="link">
              <p>Popular Cars</p>
              <ArrowRightIcon className="rightArrow" />
            </Link>
            <ul className="submenu2">
              {populerCars.map((e,i) => (
                <li key={i}>
                  <Link to={e.to} className="link">
                    <p>{e.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>{" "}
          <li>
            <Link to="#" className="link">
              <p>Electric Cars</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>Electric Charging STation</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>Suggest Me a Car</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>BS6 Cars</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>Offers and Dicsount</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>Serviec Centers</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>Dealers</p>
            </Link>
          </li>
          <li>
            <Link to="#" className="link">
              <p>Win iphone</p>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
