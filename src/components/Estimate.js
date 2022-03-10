import React, { useState } from "react";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie";
import {
    useTheme,
    makeStyles,
    Grid,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogContent,
    TextField,
} from "@material-ui/core";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import info from "../assets/info.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
    icon: {
        width: "12em",
        height: "12em",
    },
    message: {
        border: `2px solid ${theme.palette.common.arcBlue}`,
        marginTop: "5em",
        borderRadius: 5,
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.arcOrange,
        color: "#fff",
        height: 50,
        width: 225,
        fontSize: "1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    specialText: {
        fontFamily: "Railway",
        fontWeight: 700,
        fontSize: "1.5rem",
        color: theme.palette.common.arcOrange,
    },
}));

const defaultQuestions = [
    {
        id: 1,
        title: "Which services are you interested in",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "Three floating screens",
                selected: false,
                cost: 0,
            },
            {
                id: 2,
                title: "IOS Android Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "Phones and tablets outline",
                selected: false,
                cost: 0,
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "Computer outline",
                selected: false,
                cost: 0,
            },
        ],
    },
];

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 100,
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iphone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100,
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100,
            },
        ],
        active: true,
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 25,
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 25,
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25,
            },
        ],
        active: false,
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: users,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25,
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 25,
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25,
            },
        ],
        active: false,
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25,
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50,
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100,
            },
        ],
        active: false,
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1,
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25,
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5,
            },
        ],
        active: false,
    },
];

const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 100,
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 200,
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 250,
            },
        ],
        active: true,
    },
];

export default function Estimate() {
    const classes = useStyles();
    const theme = useTheme();

    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
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

    // cost
    const [total, setTotal] = useState(0);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const nextQuestions = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter((question) => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        let nextIndex = activeIndex + 1;
        if (nextIndex >= newQuestions.length) {
            nextIndex = 0;
        }

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

        setQuestions(newQuestions);
    };

    const previousQuestions = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter((question) => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        let prevIndex = activeIndex - 1;
        if (prevIndex < 0) {
            prevIndex = newQuestions.length - 1;
        }

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[prevIndex] = { ...newQuestions[prevIndex], active: true };

        setQuestions(newQuestions);
    };

    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter((question) => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0].options.filter(
            (option) => option.selected
        );

        switch (currentlyActive[0].subtitle) {
            case "Select one.":
                if (previousSelected[0]) {
                    previousSelected[0].selected = !previousSelected[0].selected;
                }
                newSelected.selected = !newSelected.selected;
                break;
            default:
                newSelected.selected = !newSelected.selected;
                break;
        }

        switch (newSelected.title) {
            case "Custom Software Development":
                setQuestions(softwareQuestions);
                break;
            case "IOS/Android App Development":
                setQuestions(softwareQuestions);
                break;
            case "Website Development":
                setQuestions(websiteQuestions);
                break;
            default:
                setQuestions(newQuestions);
                break;
        }
    };

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

    const getTotal = () => {
        let cost = 0;
        const selections = questions
            .map((question) => question.options.filter((option) => option.selected))
            .filter((option) => option.length > 0);
        selections.map((option) => option.map((option) => (cost += option.cost)));
        setTotal(cost);

        if (questions.length > 2) {
            const userCost = questions
                .filter(
                    (question) => question.title === "How many users do you expect?"
                )
                .map((question) =>
                    question.options.filter((option) => option.selected)
                )[0][0].cost;
            cost = cost - userCost;
            cost = cost * userCost;
        }
        setTotal(cost);
    };

    return (
        <Grid container direction="row">
            <Grid item container direction="column" lg>
                <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
                    <Typography variant="h2">Estimate</Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
                >
                    <Lottie options={defaultOptions} height="100%" width="100%" />
                </Grid>
            </Grid>
            <Grid
                item
                container
                lg
                direction="column"
                alignItems="center"
                style={{ marginRight: "2em", marginBottom: "25em" }}
            >
                {questions
                    .filter((question) => question.active)
                    .map((question, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item>
                                    <Typography
                                        variant="h2"
                                        align="center"
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "2.25rem",
                                            marginTop: "5em",
                                        }}
                                    >
                                        {question.title}
                                    </Typography>
                                </Grid>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    style={{ marginBottom: "2.5em" }}
                                    gutterBottom
                                ></Typography>
                                <Grid item container justifyContent="space-around">
                                    {question.options.map((option) => (
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            md
                                            component={Button}
                                            style={{
                                                display: "grid",
                                                borderRadius: 0,
                                                textTransform: "none",
                                                maxWidth: "14em",
                                                backgroundColor: option.selected
                                                    ? theme.palette.common.arcOrange
                                                    : null,
                                            }}
                                            onClick={() => handleSelect(option.id)}
                                        >
                                            <Grid item container direction="column">
                                                <Grid item style={{ maxWidth: "12em" }}>
                                                    <Typography
                                                        style={{
                                                            marginBottom: "1em",
                                                            lineHeight: "1.25em",
                                                        }}
                                                        variant="h6"
                                                        align="center"
                                                    >
                                                        {option.title}
                                                    </Typography>
                                                    <Typography variant="caption" align="center">
                                                        {option.subtitle}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <img
                                                        src={option.icon}
                                                        alt={option.iconAlt}
                                                        className={classes.icon}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </React.Fragment>
                        );
                    })}
                <Grid
                    item
                    container
                    justifyContent="space-between"
                    style={{ width: "15em", marginTop: "3em" }}
                >
                    <Grid item>
                        <IconButton
                            onClick={previousQuestions}
                            disabled={questions.length === 1}
                        >
                            <img src={backArrow} alt="Previous question"></img>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            onClick={nextQuestions}
                            disabled={questions.length === 1}
                        >
                            <img src={forwardArrow} alt="Next question"></img>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            className={classes.estimateButton}
                            onClick={() => {
                                getTotal();
                                setDialogOpen(true);
                            }}
                        >
                            Get Estimate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <Grid container direction="column" justifyContent="center">
                    <Grid item>
                        <Typography variant="h2" align="center">
                            Estimate
                        </Typography>
                    </Grid>
                    <DialogContent>
                        <Grid container>
                            <Grid item container direction="column" md={7}>
                                <Grid item style={{ marginBottom: "0.5em" }}>
                                    {/* name field */}
                                    <Grid>
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
                                <Grid item>
                                    <Typography variant="body1" paragraph>
                                        We can create this digital solution for an estimated{" "}
                                        <span className={classes.specialText}>
                                            ${total.toFixed(2)}
                                        </span>
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        Fill out your name, phone number, and email, place your
                                        request, and we'll get back to you with details moving
                                        forward with a final price.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction="column" md={5}>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item container alignItems="center">
                                            <Grid item>
                                                <img src={check} alt="check-mark"></img>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">
                                                    First option check
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container alignItems="center">
                                            <Grid item>
                                                <img src={check} alt="check-mark"></img>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">
                                                    Second option check
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container alignItems="center">
                                            <Grid item>
                                                <img src={check} alt="check-mark"></img>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">
                                                    Third option check
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" className={classes.estimateButton}>
                                        Place Request
                                        <img src={send} alt="Paper airplane" style={{ marginLeft: ".5em" }}></img>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Grid>
            </Dialog>
        </Grid>
    );
}
