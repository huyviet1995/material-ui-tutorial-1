import React from 'react'
import Lottie from 'react-lottie';
import { useTheme, makeStyles, Grid, Typography, Button, IconButton } from '@material-ui/core';

import check from '../assets/check.svg';
import send from '../assets/send.svg';
import software from '../assets/software.svg';
import mobile from '../assets/mobile.svg';
import website from '../assets/website.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import camera from '../assets/camera.svg';
import upload from '../assets/upload.svg';
import person from '../assets/person.svg';
import persons from '../assets/persons.svg';
import people from '../assets/people.svg';
import bell from '../assets/bell.svg';
import users from '../assets/users.svg';
import iphone from '../assets/iphone.svg';
import gps from '../assets/gps.svg';
import customized from '../assets/customized.svg';
import data from '../assets/data.svg';
import android from '../assets/android.svg';
import globe from '../assets/globe.svg';
import biometrics from '../assets/biometrics.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';

const useStyles = makeStyles(theme => ({
    icon: {
        width: '12em',
        height: '12em',
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.arcOrange,
        color: '#fff',
        height: 50,
        width: 225,
        fontSize: "1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    }
}));

export default function Estimate() {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Grid container direction="row">
            <Grid item container direction="column" lg>
                <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
                    <Typography variant="h2">Estimate</Typography>
                </Grid>
                <Grid item container direction="column" style={{ marginRight: '10em', maxWidth: '50em', marginTop: "7.5em" }}>
                    <Lottie options={defaultOptions} height="100%" width="100%" />
                </Grid>
            </Grid>
            <Grid item container lg direction="column" alignItems='center' style={{ marginRight: "2em", marginBottom: "25em" }}>
                <Grid item>
                    <Typography variant="h2" align="center" style={{ fontWeight: 500, fontSize: "2.25rem", marginBottom: "2.5em", marginTop: "5em" }} gutterBottom>
                        Which services are you interested in
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item container direction="column" md>
                        <Grid item container direction="column">
                            <Grid item style={{ maxWidth: '12em' }}>
                                <Typography style={{ marginBottom: "1em" }} variant="h6" align="center">Custom Software Development</Typography>
                            </Grid>
                            <Grid item>
                                <img src={software} alt="three floating screens" className={classes.icon} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item container direction="column">
                            <Grid item style={{ maxWidth: '12em' }}>
                                <Typography style={{ marginBottom: "1em" }} variant="h6" align="center">IOS/Android App Development</Typography>
                            </Grid>
                            <Grid item>
                                <img src={mobile} alt="phones and tablet outline" className={classes.icon} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item container direction="column">
                            <Grid item style={{ maxWidth: '12em' }}>
                                <Typography style={{ marginBottom: "1em" }} variant="h6" align="center">Website Development</Typography>
                            </Grid>
                            <Grid item>
                                <img src={website} alt="computer outline" className={classes.icon} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justifyContent='space-between' style={{ width: '15em', marginTop: '3em' }}>
                    <Grid item>
                        <img src={backArrow} alt="Previous question"></img>
                    </Grid>
                    <Grid item>
                        <img src={forwardArrow} alt="Next question"></img>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={classes.estimateButton}>Get Estimate</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}







