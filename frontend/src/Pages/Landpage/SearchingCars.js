import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchOption } from "../../Componetens/Option/SearchOption";
import { Link } from "react-router-dom";
import { getCarData } from "../../Redux/AppReducer/action";
import "../../Style/Landpage.css";
export const SearchingCars = () => {
  const cars = useSelector((store) => store.AppReducer.cars.searched);
  const dispatch = useDispatch();
  // console.log("cars", cars);
  const getData = () => {
    dispatch(getCarData());
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log("carsss", cars);
  // console.log("searchCars ", cars?.options);

  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg" className="searchContainer">
        <h2>The most searched cars</h2>
        <SearchOption data={cars} />
      </Container>
      <Container maxWidth="lg" className="searchContainerLink">
        <Link to="#" className="">
          View All Hatchback Cars
        </Link>
      </Container>
    </>
  );
};
