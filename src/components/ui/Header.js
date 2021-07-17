import React from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg'
import PropTypes from 'prop-types';

export const useStyles = makeStyles(theme => ({
  appBar: {
    ...theme.appBar,
  },
  toolbarMargin: {
    marginBottom: '7em'
  },
  logo: {
    height: '7em',
  }
}))

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

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles(props)
  return (
     <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters className={classes.toolbar}>
            <img src={logo} className={classes.logo} alt={"Company Logo"} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}