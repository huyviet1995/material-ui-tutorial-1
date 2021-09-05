import React, { useState, useEffect, useMemo } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    ...theme.appBar,
  },
  toolbarMargin: {
    marginBottom: "7em !important",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
    paddingRight: "1rem",
  },
  tab: {
    ...theme.typography.tab,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    fontWeight: "bold",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    color: "white",
  },
  logoContainer: {
    padding: 0,
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    fontWeight: "bold",
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    marginBottom: "1rem",
    "&:hover": {
      opacity: 1,
      fontWeight: "bold",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "#fff",
  },
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
  },
  drawerItem: {
    color: theme.palette.common.arcOrange,
    ...theme.typography.tab,
  },
  drawerItemEstimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawerItemSelected: {
    color: theme.palette.common.arcOrange,
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  selected: {
    color: theme.palette.common.arcOrange,
    fontWeight: "bold",
  },
  tabSelected: {
    color: theme.palette.common.arcOrange,
    fontWeight: "bold",
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();

  const { value, setValue, selectedIndex, setSelectedIndex } = props;

  const menuOptions = useMemo(() => {
    return [
      { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
      {
        name: "iOS/Android App Development",
        link: "/mobileapps",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "Custom Software Development",
        link: "/customSoftware",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Website development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ];
  }, []);

  const routes = useMemo(() => {
    return [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        mouseOver: (event) => handleClick(event),
      },
      { name: "The Revolution", link: "/revolution", activeIndex: 2 },
      { name: "About Us", link: "/about", activeIndex: 3 },
      { name: "Contact Us", link: "/contact", activeIndex: 4 },
    ];
  }, [anchorEl]);

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes, setSelectedIndex, setValue]);

  const handleClick = (event, value) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const classes = useStyles(props);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={`${route.name}-${index}`}
              divider
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{
                selected: classes.drawerItemSelected,
              }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={
                  value === route.activeIndex
                    ? [classes.drawerItem, classes.drawerItem]
                    : classes.drawerItem
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            className={classes.drawerItemEstimate}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route.name}-${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            classes={{ selected: classes.tabSelected }}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        component={Link}
        onClick={() => props.setValue(5)}
        to={"/estimate"}
        color="secondary"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        variant={"menu"}
        elevation={-1}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            elevation={-1}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem, selected: classes.selected }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(0);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={classes.appbar} position="fixed" color="primary">
          <Toolbar disableGutters className={classes.toolbar}>
            <Button
              disableRipple
              onClick={() => setValue(0)}
              to="/"
              className={classes.logoContainer}
              component={Link}
            >
              <img src={logo} className={classes.logo} alt={"Company Logo"} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
