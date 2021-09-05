import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import FooterAdornment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    color: "#fff",
    zIndex: 9999,
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#fff",
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    fontSize: "4rem",
    color: "white",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    marginRight: "5px",
    [theme.breakpoints.down("xs")]: {
      height: "30px",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2em",
      bottom: "2em",
      right: ".6em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(0);
                }}
                className={classes.link}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(2);
                }}
                to="/revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(2);
                }}
                to="/vision"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(2);
                }}
                to="/technology"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(2);
                }}
                to="/process"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => {
                  props.setValue(3);
                }}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/history"
                onClick={() => {
                  props.setValue(3);
                }}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/team"
                onClick={() => {
                  props.setValue(3);
                }}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => {
                  props.setValue(4);
                }}
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={FooterAdornment}
        className={classes.adornment}
        alt={"black decorative slash "}
      />
      <Grid container spacing={2} className={classes.socialContainer}>
        <Grid item>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="facebook logo"
              src={facebook}
              href="https://www.facebook.com"
              className={classes.icon}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              target="_blank"
              alt="twitter logo"
              src={twitter}
              className={classes.icon}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https//www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              target="_blank"
              alt="instagram logo"
              src={instagram}
              className={classes.icon}
            />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
}
