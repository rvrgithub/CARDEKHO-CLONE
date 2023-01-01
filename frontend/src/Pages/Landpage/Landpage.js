import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "./Landpage.css";
import {Slider} from "../../Componetens/Slider/Slider";
import { SearchingCars } from "../SearchingCars/SearchingCars";
export const Landpage = () => {
  return (
    // <div>
      <div className="container">
        <Box className="centerImageBox" sx={{height: "85vh", width:"100%"}}>
          {" "}
          <img
            src="https:/stimg.cardekho.com/images/uploadimages/1672227099400/CD-MasterHead-Desktop-Under10lac-Web.jpg"
            alt="image_error"
          />
        </Box>
        <SearchingCars/>
       
      </div>
    // </div>
  );
};
