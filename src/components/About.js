import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import history from "../assets/history.svg";
import profile from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: "300px",
      maxWidth: "300px",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid direction="column">
      <Grid
        item
        className={classes.rowContainer}
        align={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item className={classes.rowContainer}>
        <Typography
          variant="h4"
          className={classes.missionStatement}
        ></Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent="space-around"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
            lg
            style={{ maxWidth: "35em" }}
            className={classes.rowContainer}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
                gutterBottom
              >
                We're the new kid on the block
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              alt={"quill pen sitting on top of book"}
              style={{ maxHeight: matchesMD ? "200px" : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems={"center"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="h4"
            gutterBottom
          >
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Zachary Reece, Founder.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesMD ? "center" : undefined}
          >
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="Founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook about our founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              ></img>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my sophoremore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg>
              <Typography variant="body1" align="center" paragraph>
                loreSit do non Lorem mollit velit sint reprehenderit aliquip
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                style={{ maxWidth: "45em", padding: "1.25em" }}
              >
                Adipisicing do aliqua cillum tempor reprehenderit voluptate
                voluptate occaecat nostrud quis minim ex enim. Adipisicing in
                adipisicing magna nostrud nisi est aute. Velit est aute
                consequat mollit quis do aliquip sint.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src={puppy}
                alt={"grey spotted puppy"}
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dashtum
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item setValue={props.setValue}>
        <CallToAction />
      </Grid>
    </Grid>
  );
}
