import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

import CallToAction from "./ui/CallToAction";

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
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

export default function Websites(props) {
  const classes = useStyles();

  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
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
              to="/customSoftware"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={backArrow}
                alt="Back to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae maxime consequuntur totam vero odio quasi alias non
              voluptatem illo dolore deleniti voluptas nam, praesentium soluta,
              earum eveniet recusandae nisi numquam.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="Forward to Services" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        // direction="row"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: "-2.75em" }}
                alt={"graph with magnifying glasses with 1 and 0"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam, praesentium soluta, earum eveniet
            recusandae nisi numquam.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="flex-end"
        direction={matchesSM ? "column" : "row"}
        // className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align="center"
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                E-commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={ecommerce}
                // style={{ marginLeft: "-2.75em" }}
                alt={"world outline made of dollar sign"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
            paragraph
            // className={classes.paragraphContainer}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam.
          </Typography>
          <Typography
            variant={"body1"}
            paragraph
            align={matchesSM ? "center" : undefined}
            // className={classes.paragraphContainer}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        // direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={outreach}
                style={{ marginLeft: "-2.75em" }}
                alt={"megaphone"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam, praesentium soluta, earum eveniet
            recusandae nisi numquam.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        // direction="row"
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align="center"
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                SEO
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={seo}
                // style={{ marginLeft: "-2.75em" }}
                alt={"website standing on winner's podium"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime consequuntur totam vero odio quasi alias non voluptatem illo
            dolore deleniti voluptas nam.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
