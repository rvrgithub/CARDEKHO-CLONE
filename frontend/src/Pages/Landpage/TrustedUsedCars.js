import { Container} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Style/Landpage.css";
import { Link } from "react-router-dom";
import { getCarData } from "../../Redux/AppReducer/action";
import { TrustedUsedCarsOption } from "../../Componetens/Option/TrustedUsedCarsOption";
export const TrustedUsedCars = () => {
  const cars = useSelector((store) => store?.AppReducer?.cars?.trustedUsedCars);
  const dispatch = useDispatch();
  console.log("cars",cars)
  const getData = () => {
    dispatch(getCarData());
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log("carsss",cars.data)
  console.log("trustedUsedCars", cars?.options);

  return (
    <>
      <Container maxWidth="lg" className="searchContainer">
        <h2>The most searched cars</h2>
        <TrustedUsedCarsOption data={cars}/>
      </Container>
      <Container maxWidth="lg" className="searchContainerLink">
        <Link to="#" className="">
          View All Hatchback Cars
        </Link>
      </Container>
    </>
  );
};
