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

const useStyles = makeStyles((theme) => ({}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("xs"));

  return <Grid container direction="column"></Grid>;
}
