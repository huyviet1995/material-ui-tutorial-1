import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from "@material-ui/core";

import axios from "axios";

import ButtonArrow from "./ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import { Dialog, DialogContent, CircularProgress } from "@material-ui/core";

import airplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginRight: "5em",
    height: 45,
    minWidth: "fit-content",
    color: "#fff",
    width: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: "1.5rem",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.arcOrange,
    marginTop: "1rem",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 250,
    },
  },
  sendButtonImage: {
    marginLeft: ".5rem",
    fontSize: "2rem",
    height: "15px",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // name
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  // email
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  // phone
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  // message
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-material-ui-tutorial-b84ee.cloudfunctions.net/sendMail"
      )
      .then((res) => { 
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
  };

  const buttonContents = (
    <React.Fragment>
        Send Message
        <img
          className={classes.sendButtonImage}
          src={airplane}
          alt="paper-airplane"
        />
    </React.Fragment>
  )

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ margin: matchesSM ? "1em 0" : matchesMD ? "5em 0" : 0 }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <Typography
                variant="h2"
                color="initial"
                style={{
                  lineHeight: 1,
                  textAlign: matchesMD ? "center" : undefined,
                }}
                // textAlign={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                style={{
                  color: theme.palette.common.arcBlue,
                  textAlign: matchesMD ? "center" : undefined,
                }}
                variant="body1"
                color="initial"
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              {/* Phone Icon */}
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "1rem" }}
                ></img>
              </Grid>
              <Grid item>
                <Typography
                  variant="body0"
                  color="initial"
                  style={{
                    color: theme.palette.common.arcBlue,
                  }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    554 555 5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              {/* email icon */}
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "1rem", verticalAlign: "bottom" }}
                ></img>
              </Grid>
              <Grid item>
                <Typography
                  variant="body0"
                  color="initial"
                  style={{
                    color: theme.palette.common.arcBlue,
                  }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            {/* All the fields */}
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "19em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                {/* name field */}
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  fullWidth
                  id="name"
                  value={name}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                {/* phone fieldc */}
                <TextField
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  label="Phone"
                  fullWidth
                  id="phone"
                  value={phone}
                  helperText={phoneHelper}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                {/* email field */}
                <TextField
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  label="Email"
                  fullWidth
                  id="email"
                  value={email}
                  helperText={emailHelper}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                value={message}
                className={classes.message}
                id="message"
                multiline
                rows={9}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{ disableUnderline: true }}
              ></TextField>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ maxWidth: "19em", marginTop: "2em" }}
            >
              <Button
                // disabled={
                //   name.length === 0 ||
                //   message.length === 0 ||
                //   phoneHelper.length !== 0 ||
                //   emailHelper.length !== 0
                // }
                variant="contained"
                className={classes.sendButton}
                onClick={onConfirm}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              {/* name field */}
              <TextField
                onChange={(e) => setName(e.target.value)}
                label="Name"
                fullWidth
                id="name"
                value={name}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              {/* phone fieldc */}
              <TextField
                onChange={onChange}
                error={phoneHelper.length !== 0}
                label="Phone"
                fullWidth
                id="phone"
                value={phone}
                helperText={phoneHelper}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              {/* email field */}
              <TextField
                onChange={onChange}
                error={emailHelper.length !== 0}
                label="Email"
                fullWidth
                id="email"
                value={email}
                helperText={emailHelper}
              />
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                value={message}
                className={classes.message}
                id="message"
                multiline
                fullWidth
                rows={9}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{ disableUnderline: true }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
          >
            <Grid item>
              <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems={"center"}
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                alignItems={matchesMD ? "center" : undefined}
                variant="h2"
              >
                Simple Software. <br /> Revolutionary Result
              </Typography>
              <Typography
                alignItems={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5rem", color: "white" }}
              >
                Take advantages of the 21st century
              </Typography>
              <Grid container item justify={matchesMD ? "center" : undefined}>
                <Button
                  component={Link}
                  to={"/estimate"}
                  variant="outlined"
                  className={classes.learnButton}
                >
                  <span style={{ marginRight: 5 }}>LEARN MORE</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
