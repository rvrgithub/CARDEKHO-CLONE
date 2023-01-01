import { Container, CssBaseline, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardComponent } from "../../Componetens/CardComponent/CardComponent";
import { Slider } from "../../Componetens/Slider/Slider";
import { getCarData } from "../../Redux/AppReducer/action";
import "./SearchingCar.css";
export const SearchingCars = () => {
  const [carData,setCarData] = useState({});
  const cars = useSelector((store)=>store.AppReducer);
  console.log("cars",cars)

  getCarData();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className="searchContainer">
        <h2>The most searched cars</h2>
        <div className="flexBox">
          <p>Hatchback</p>
          <p>Sedan</p>
          <p>SUV</p>
          <p>MUV</p>
          <p>Luxury</p>
        </div>
        <CardComponent />
        <Slider/>
      </Container>
    </>
  );
};
