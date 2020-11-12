import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { CovidStock, CovidStatus } from "containers/covid";
import SearchComponent from "containers/SearchComponent";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const stock = useSelector(state => (state.stockReducer.stock))

  console.log(stock)
  if (stock != null) {
    return (
      <div>
        <Header
          brand="Material Kit Ui"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg.jpg")}>
          <div className={classes.container}>
            <SearchComponent/>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <CovidStatus />
            <CovidStock/>
            <Link to="/stock">더 많은 정보 보기</Link>
        </div>
        <Footer />
      </div>
    )}
  else {
    return (
      <div>
      <Header
        brand="Material Kit Ui"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg.jpg")}>
        <div className={classes.container}>
          <SearchComponent/>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <h3>원하는 종목을 검색해보세요 !</h3>
      </div>
      <Footer />
    </div>
    )
  }
}
