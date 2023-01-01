import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const Cardekho = () => {
  const CarNews = [
    {
      to: "#",
      logo: "/cardekho.png",
      title: "CarDekho Gaadi Store",
    },
    { to: "#", logo: "/insurance.png", title: "Car Insurance" },
    { to: "#", logo: "/insurance.png", title: "Heath Insurance" },
    { to: "#", logo: "/insurance.png", title: "Term Life Insurance" },
    { to: "#", logo: "/cardekho.png", title: "Loan Against Car" },
    {
      to: "#",
      logo: "https://stimg.cardekho.com/pwa/img/TD-logo.svg",
      title: "Cat Tyres",
    },
    {
      to: "#",
      logo: "https://stimg.cardekho.com/pwa/img/ruppyLogo.svg",
      title: "Used CAr Loan",
    },
    {
      to: "#",
      logo: "https://stimg.cardekho.com/pwa/img/ruppyLogo.svg",
      title: "New Car Loan",
    },
  ];
  return (
    <ul className="menu">
      <li>
        <div className="flex">
          <Link to="#" className="link">
            <p className="text">CARDEKHO VENTURES</p>
            <ArrowDropDownIcon className="text" />
          </Link>
        </div>
        <ul className="submenu">
          {CarNews.map((e,i) => (
            <li key={i}>
              <Link to={e.to} className="link">
                <div className="cardekho">
                  <img src={e.logo} alt="logo_error" />
                  <Typography>{e.title}</Typography>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
