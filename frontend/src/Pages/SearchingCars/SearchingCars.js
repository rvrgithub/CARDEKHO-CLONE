import { Container, CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardComponent } from "../../Componetens/CardComponent/CardComponent";
import { Option } from "../../Componetens/Option/Option";
import { Slider } from "../../Componetens/Slider/Slider";
import { getCarData } from "../../Redux/AppReducer/action";
import "./SearchingCar.css";
import { Divider } from '@mui/material';
export const SearchingCars = () => {
  const [carData, setCarData] = useState({});
  const cars = useSelector((store) => store.AppReducer.cars);
  const dispatch = useDispatch();
  // console.log("cars",cars)
  const getData = () => {
    dispatch(getCarData("searched"));
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log("carsss",cars.data)
  console.log("cars", cars.options);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className="searchContainer">
        <h2>The most searched cars</h2>
        <Option data={cars} />
        {/* <Divider/> */}
      {/* <h1>asdgfgsd</h1> */}
      <Container maxWidth="lg" className="searchContainerLink">
      <h1>asdgfgsd</h1>
      </Container>
      </Container>
     
    </>
  );
};
