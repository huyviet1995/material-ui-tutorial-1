import React from "react";
import { Link } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  IconButton,
} from "@material-ui/core";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import Lottie from "react-lottie";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";

import integrationAnimation from "../animations/integrationAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              to="/services"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Custom Software Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant="h2">
              IOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit.
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae maxime consequuntur totam vero odio quasi alias non
              voluptatem illo dolore deleniti voluptas nam, praesentium soluta,
              earum eveniet recusandae nisi numquam.
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              quaerat.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="Forward to IOS/Android App Development"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quas?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae quasi ut tempore dignissimos fugiat asperiores
              voluptate provident. Beatae, consequatur nisi dignissimos sint
              laborum et asperiores, unde aspernatur sed impedit illum?
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            isStopped
            style={{ maxHeight: "20em" }}
          />
        </Grid>
        <Grid
          item
          style={{ marginBottom: "15em" }}
          container
          direction={matchesMD ? "column" : "row"}
          md
        >
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quas?
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae quasi ut tempore dignissimos fugiat asperiores
              voluptate provident. Beatae, consequatur nisi dignissimos sint
              laborum et asperiores, unde aspernatur sed impedit illum?
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={"center"} md>
            <Typography align={"center"} variant="h4" gutterBottom>
              Extend functionality
            </Typography>
            <Grid item>
              <img src={swiss} alt={"swiss army knife"}></img>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              marginTop: matchesMD ? "10em" : 0,
              marginBottom: matchesMD ? "10em" : 0,
            }}
            container
            direction="column"
            alignItems={"center"}
            md
          >
            <Typography align={"center"} variant="h4" gutterBottom>
              Extend Access
            </Typography>
            <Grid item>
              <img
                src={access}
                alt={"Access"}
                style={{ maxWidth: matchesXS ? "20em" : "28em" }}
              ></img>
            </Grid>
          </Grid>
          <Grid item container direction="column" alignItems={"center"} md>
            <Typography align={"center"} variant="h4" gutterBottom>
              Increase engagement
            </Typography>
            <Grid item>
              <img src={engagement} alt={"Increase engagement"}></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
