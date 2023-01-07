import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PopularBrandsSlider } from "../../Componetens/Slider/PopularBrandsSlider";
import { getCarData } from "../../Redux/AppReducer/action";
import "../../Style/Landpage.css";
export const PopularBrands = () => {
  const [carData, setCarData] = useState({});
  const cars = useSelector((store) => store.AppReducer.cars.popularBrands);
  const dispatch = useDispatch();
  // console.log("cars",cars)
  const getData = () => {
    dispatch(getCarData());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container maxWidth="lg"  className="popularContainer">
      <h2>Popular Brands</h2>
      <PopularBrandsSlider data={cars} />
    </Container>
  );
};
