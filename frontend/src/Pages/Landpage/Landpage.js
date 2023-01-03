import React from "react";
import Box from "@mui/material/Box";
import "../../Style/Landpage.css";
import { SearchingCars } from "./SearchingCars";
import { PopularBrands } from "./PopularBrands";
import { TrustedUsedCars } from "./TrustedUsedCars";
export const Landpage = () => {
  return (
    <div className="container">
      <Box className="centerImageBox" sx={{ height: "85vh", width: "100%" }}>
        {" "}
        <img
          src="https:/stimg.cardekho.com/images/uploadimages/1672227099400/CD-MasterHead-Desktop-Under10lac-Web.jpg"
          alt="image_error"
        />
      </Box>
      <SearchingCars />
      <TrustedUsedCars />
      <PopularBrands />
    </div>
  );
};
