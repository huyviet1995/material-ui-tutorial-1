import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.arcOrange,
  },
  subTitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/* iOS/Android block */}
      <Grid
        container
        justify={matchesSM ? "center" : "flex-end"}
        direction="row"
        className={classes.serviceContainer}
        style={{ marginTop: matchesSM ? "1em" : "5em" }}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em",
          }}
        >
          <Typography variant="h4">iOS/Android App Development</Typography>
          <Typography variant="subtitle1" className={classes.subTitle}>
            Extend Functionality, Extend Access, Increase Engagement
          </Typography>
          <Typography variant="subtitle1">
            Integrate your web experience or create a standalone app
            {matchesSM ? null : <br />}
            <span className={classes.specialText}>celebration</span>
          </Typography>
          <Button
            component={Link}
            to="/mobileapps"
            variant="outlined"
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 10 }}>LEARN MORE</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.arcBlue}
            ></ButtonArrow>
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img
            className={classes.icon}
            alt="Mobile Phone Icon"
            src={mobileAppsIcon}
            width="250em"
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        justify={matchesSM ? "center" : undefined}
        className={classes.serviceContainer}
        direction="row"
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em",
          }}
        >
          <Typography variant="h4">Custom Software Develop</Typography>
          <Typography variant="subtitle1" className={classes.subTitle}>
            Save Energy, Save Time, Save Money
          </Typography>
          <Typography variant="subtitle1">
            Complete digital solutions, from investigation to{" "}
            <span className={classes.specialText}>celebration</span>
          </Typography>
          <Button
            component={Link}
            to={"/revolution"}
            variant="outlined"
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(1);
            }}
          >
            <span style={{ marginRight: 10 }}>LEARN MORE</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.arcBlue}
            ></ButtonArrow>
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt="custom software icon"
            src={customSoftwareIcon}
          ></img>
        </Grid>
      </Grid>

      {/* Websites block */}
      <Grid
        container
        justify={matchesSM ? "center" : "flex-end"}
        direction="row"
        className={classes.serviceContainer}
        style={{ marginBottom: "10em" }}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em",
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1" className={classes.subTitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engine, built for speed.
            {matchesSM ? null : <br />}
            <span className={classes.specialText}>celebration</span>
          </Typography>
          <Button
            component={Link}
            to={"/websites"}
            variant="outlined"
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(3);
            }}
          >
            <span style={{ marginRight: 10 }}>LEARN MORE</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.arcBlue}
            ></ButtonArrow>
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img
            className={classes.icon}
            alt="Mobile Phone Icon"
            src={websitesIcon}
            width="250em"
          ></img>
        </Grid>
      </Grid>
    </Grid>
  );
}
