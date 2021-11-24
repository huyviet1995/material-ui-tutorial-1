import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scalesAnimation from "../animations/scaleAnimation/data";
import roots from "../assets/root.svg";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/styles";

import CallToAction from "./ui/CallToAction";

import {
  makeStyles,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

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
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();

  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scalesOptions = {
    loop: true,
    autoplay: true,
    animationData: scalesAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Developments
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
              to="/websites"
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
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          md
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h4">
              Save Energy
            </Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h4">
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          md
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h4">
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        style={{ marginBottom: "10em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                debitis?
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                alias maxime fugit odit reprehenderit iure quaerat tenetur ipsa
                error dolorem.
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                veritatis odio nam et illum pariatur iure fugit, vel sint
                laborum, accusamus architecto a eius alias ducimus dolorum
                quibusdam voluptatem cumque.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={scalesOptions}
              style={{ maxWidth: 280, maxHeight: 260 }}
            />
          </Grid>
          <Grid item container direction="column" md align="right">
            <Grid item>
              <Typography align={matchesSM ? "center" : "right"} variant="h4">
                Scales
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                inventore mollitia voluptatum reiciendis accusantium vitae
                facilis eveniet quo vel esse.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots  extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid
            item
            className={classes.itemContainer}
            direction={matchesSM ? "column" : "row"}
          >
            <Typography align="center" variant="h4" gutterBottom>
              Root Cause Analysis
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              veritatis nesciunt ipsa enim repudiandae, minus ex eum mollitia a
              quibusdam?
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              veritatis nesciunt ipsa enim repudiandae, minus ex eum mollitia a
              quibusdam?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="space-around"
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "10em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, expedita.
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus perferendis laboriosam voluptates illum odit.
                Debitis aspernatur asperiores laudantium accusantium odit!
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                iste deserunt excepturi dolor, et eius dicta ea explicabo ipsum?
                Reiciendis.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxWidth: 280, maxHeight: 290 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md align={matchesSM ? "center" : "right"}>
            <Lottie
              options={uxOptions}
              style={{ maxWidth: 280, maxHeight: 260, marginBottom: "10px" }}
            />
          </Grid>
          <Grid item container md align={matchesSM ? "center" : "right"}>
            <Grid item>
              <Typography align={matchesSM ? "center" : "right"} variant="h4">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                inventore mollitia voluptatum reiciendis accusantium vitae
                facilis eveniet quo vel esse.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                inventore mollitia voluptatum reiciendis accusantium vitae
                facilis eveniet quo vel esse.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                inventore mollitia voluptatum reiciendis accusantium vitae
                facilis eveniet quo vel esse.
              </Typography>
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
