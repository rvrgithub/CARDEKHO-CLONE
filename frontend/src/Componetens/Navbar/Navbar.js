import React from "react";
import { AppBar, makeStyles, Input } from "@material-ui/core";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const useStyles = makeStyles((theme) => ({
  nav: {
    position:"fixed",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "75px",
    padding:0,
    zIndex:1000,
    // border: "1px solid red",
    backgroundColor: "white",
    boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    display: "flex",
  },
  image: {
    width: "90%",
    height: "50px",
    margin: "5px",
  },
  logo: {
    width: "15%",
    height: "100%",
    marginLeft: "-25px",
    marginTop: "10px",
  },

  flex: {
    display: "flex",
    flexDirection: "row",
  },
  login: {
    width: "260px",
    height: "50px",
    margin: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tag: {
    margin: "15px 5px 0 0",
    fontSize: "large",
  },
  p: {
    margin: "10px 0",
  },

  search: {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    height: "45px",
    margin: "10px",
    padding: "5px 0 0 10px",
    borderRadius: "5px",
    border: "2px solid gray.00",
    boxShadow:
      "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  },
  inputSt: {
    width: "90%",
    // height: "100%",
    flexGrow: "2",
    border: "transparent",

    borderBottom: "none",
    "&:focus": {
      outline: "none",
    },
  },
  searchTag: {
    backgroundColor: "black",
    margin: "-5px 0 0 0",
    width: "13%",
    height: "50px",
    cursor: "pointer",
    // border: "1px solid red",
    borderRadius: "0 5px 5px 0",
  },
}));
export const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav} position="fixed">
      <div className={classes.logo}>
        <Link to="/">
          {" "}
          <img
            className={classes.image}
            src="https://stimg.cardekho.com/pwa/img/christmasLogo-desktop.svg"
            alt="logo_error"
          />
        </Link>
      </div>
      <div className={classes.search}>
        <input
          className={classes.inputSt}
          placeholder="Search Cars or Brands eg. Swift, or Maruti...."
        />
        <div className={classes.searchTag}>
          <SearchOutlinedIcon className={classes.tag} />
        </div>
      </div>
      <div className={classes.login}>
        <Link to="#">
          <FavoriteBorderOutlinedIcon className={classes.tag} />
        </Link>
        <Link to="login" className={classes.link}>
          <PeopleAltOutlinedIcon className={classes.tag} />
          <p className={classes.p}>Login/Register</p>
        </Link>
      </div>
    </div>
  );
};
