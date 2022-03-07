import React, { useState } from 'react'
import { cloneDeep } from 'lodash'
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
import info from '../assets/info.svg';

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

const defaultQuestions = [
    { id: 1, title: 'Which services are you interested in', active: true, options: [
        { id: 1, title: "Custom Software Development", subtitle: null, icon: software, iconAlt: 'Three floating screens', selected: false, cost: 0 },
        { id: 2, title: "IOS Android Development", subtitle: null, icon: mobile, iconAlt: 'Phones and tablets outline', selected: false, cost: 0 },
        { id: 3, title: "Website Development", subtitle: null, icon: website, iconAlt: 'Computer outline', selected: false, cost: 0 },
    ] },
]

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
        cost: 100
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100
      }
    ],
    active: true
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
        cost: 25
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25
      }
    ],
    active: false
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
        cost: 25
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25
      }
    ],
    active: false
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
        cost: 25
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100
      }
    ],
    active: false
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
        cost: 1
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5
      }
    ],
    active: false
  }
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
        cost: 100
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250
      }
    ],
    active: true
  }
];

export default function Estimate() {
    const classes = useStyles();
    const theme = useTheme();

    const [questions, setQuestions] = useState(softwareQuestions);

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
      const currentlyActive = newQuestions.filter(question => question.active);
      const activeIndex = currentlyActive[0].id - 1;

      let nextIndex = activeIndex + 1;
      if (nextIndex >= newQuestions.length) {
        nextIndex = 0;
      }

      newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
      newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

      setQuestions(newQuestions);

    }

    const previousQuestions = () => {
      const newQuestions = cloneDeep(questions);
      const currentlyActive = newQuestions.filter(question => question.active);
      const activeIndex = currentlyActive[0].id - 1;

      let prevIndex = activeIndex - 1;
      if (prevIndex < 0) {
        prevIndex = newQuestions.length - 1;
      }

      newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
      newQuestions[prevIndex] = { ...newQuestions[prevIndex], active: true };

      setQuestions(newQuestions);

    }

    const handleSelect = (id) => {
      const newQuestions = cloneDeep(questions);
      const currentlyActive = newQuestions.filter(question => question.active);
      const activeIndex = currentlyActive[0].id - 1;

      const newSelected = newQuestions[activeIndex].options[id - 1];

      newSelected.selected = !newSelected.selected;
      console.log({ newSelected });

      setQuestions(newQuestions);

    }

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
                    {questions.filter(question => question.active).map((question, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item>
                                    <Typography variant="h2" align="center" style={{ fontWeight: 500, fontSize: "2.25rem", marginTop: "5em" }}>
                                        {question.title}
                                    </Typography>
                                </Grid>
                                <Typography variant="body1" align="center" style={{ marginBottom: '2.5em', }} gutterBottom></Typography>
                                <Grid item container>
                                    {question.options.map(option => (
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
                                            backgroundColor: option.selected ? theme.palette.common.arcOrange : null  
                                          }}
                                          onClick={() => handleSelect(option.id)}
                                        >
                                            <Grid item container direction="column">
                                                <Grid item style={{ maxWidth: '12em' }}>
                                                    <Typography style={{ marginBottom: "1em", lineHeight: "1.25em" }} variant="h6" align="center">{option.title}</Typography>
                                                    <Typography variant='caption' align='center'>{option.subtitle}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </React.Fragment>
                        )
                    <Grid item>
                        <IconButton onClick={previousQuestions}>
                            <img src={backArrow} alt="Previous question"></img>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={nextQuestions}>
                          <img src={forwardArrow} alt="Next question"></img>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={classes.estimateButton}>Get Estimate</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}







