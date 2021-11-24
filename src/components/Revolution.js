import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import vision from "../assets/vision.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import { useMediaQuery } from "@material-ui/core";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import Lottie from "react-lottie";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      alignItems={matchesMD ? "center" : undefined}
      direction="column"
    >
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={"center"}
        style={{ marginTop: "5em" }}
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : "right"}
              gutterBottom
            >
              Vision
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              adipisci!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              perferendis a labore voluptates ullam animi necessitatibus dolor
              quidem commodi possimus!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              non.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              repellat?
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : "right"}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              voluptas.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={"center"}
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              adipisci!
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              perferendis a labore voluptates ullam animi necessitatibus dolor
              quidem commodi possimus!
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              non.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              repellat?
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              voluptas.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          container
          justifyContent={matchesMD ? "center" : "flex-end"}
        >
          <Lottie
            isStopped={true}
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
      >
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="h4"
            gutterBottom
          >
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              expedita similique laudantium temporibus voluptatibus cumque nisi
              facere dignissimos nihil. Fugiat?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={consultation}
            alt="Handshake"
            width={"100%"}
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              expedita similique laudantium temporibus voluptatibus cumque nisi
              facere dignissimos nihil. Fugiat?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={mockup} alt="Basic website design outline" width={"100%"} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              expedita similique laudantium temporibus voluptatibus cumque nisi
              facere dignissimos nihil. Fugiat?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="Maginifying glasses" width={"100%"} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67C52", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={design} alt="Toothbrush leaving stroke" width={"100%"} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="Magnifying glasses" width={"100%"} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={build}
            alt="Construction site building"
            style={{ maxWidth: matchesMD ? 100 : 1000 }}
            width={"100%"}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={launch}
            alt="Rocket"
            style={{ maxWidth: 200 }}
            width={"100%"}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={maintain}
            alt="Wrench tightening bolts"
            style={{ maxWidth: 200 }}
            width={"100%"}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "90em" }}
      >
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000000", marginTop: "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quasi.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt facere repellat deleniti natus aspernatur possimus
              cupiditate numquam quae vel.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={iterate} alt="Falling dominos" width={"100%"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
