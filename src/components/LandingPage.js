import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import { useMediaQuery } from "@material-ui/core";
import mobileAppIcons from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flexWrap: "nowrap",
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    marginRight: 40,
    height: 45,
    minWidth: "fit-content",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonhero: {
    ...theme.typography.learnButton,
    fontSize: ".9rem",
    height: 45,
    minWidth: "fit-content",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  buttonContainer: {
    marginTop: "1em",
    justifyContent: "center",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
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
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage(props) {
  const theme = useTheme();
  const classes = useStyles({});
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* Hero BLock */}
      <Grid item>
        <Grid container alignItems="center" justify="flex-end" direction="row">
          <Grid md={6} item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast technology <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}
                >
                  FREE ESTIMATE
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to={"/revolution"}
                  variant="outlined"
                  className={classes.learnButtonhero}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>LEARN MORE</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item>
            <Lottie
              className={classes.animation}
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Services block */}
      <Grid
        container
        justify={matchesSM ? "center" : undefined}
        direction="row"
        className={classes.serviceContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
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
            src={CustomSoftwareIcon}
          ></img>
        </Grid>
      </Grid>
      {/* iOS/Android block */}
      <Grid
        container
        justify={matchesSM ? "center" : "flex-end"}
        direction="row"
        className={classes.serviceContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
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
            src={mobileAppIcons}
          ></img>
        </Grid>
      </Grid>
      {/* Websites block */}
      <Grid
        container
        justify={matchesSM ? "center" : null}
        direction="row"
        className={classes.serviceContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
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
          ></img>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems={"center"}
          justify={"center"}
          direction="column"
          style={{ textAlign: "center", height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary Coupled with cutting edged technology
                  </Typography>
                  <Button
                    component={Link}
                    to={"/about"}
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
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          alignItems={"center"}
          style={{ height: "80em" }}
          direction="row"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            direction={matchesXS ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
            style={{
              position: "absolute",
            }}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "inherit",
              }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
                style={{ color: "#fff" }}
              >
                <Typography style={{ color: "#fff" }} variant="h2">
                  About Us
                </Typography>
                <Typography variant="subtitle2" style={{}}>
                  Let's get personal
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ color: "#fff" }}
                    className={classes.learnButton}
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>LEARN MORE</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.arcBlue}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "inherit",
              }}
            >
              <Grid container direction="column" style={{ color: "#fff" }}>
                <Typography style={{ color: "#fff" }} variant="h2">
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" style={{}}>
                  Say Hello!
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to={"/contact"}
                    variant="outlined"
                    style={{ color: "#fff" }}
                  >
                    <span style={{ marginRight: 10 }}>LEARN MORE</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.arcBlue}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground}></div>
        </Grid>
      </Grid>
      <Grid item>
        {/* Call to Action */}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
