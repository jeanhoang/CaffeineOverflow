import React from 'react'
import { AppBar } from 'react-admin'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../assets/logo.png';

const styles = {
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
  logo: {
    maxWidth: "60px",
    marginLeft: -10
  },
}

const MyAppBar = withStyles(styles)(({ classes, ...props }) => (
  <AppBar {...props}>
    <Toolbar>
      <img src={logo} alt="logo" className={classes.logo} />
    </Toolbar>
    <Typography
      variant="h6"
      color="inherit"
      className={classes.title}
    >Sevla Design Studio Admin Dashboard</Typography>
    <span className={classes.spacer} />
    <Button color="inherit" component={Link} to={"/profile"}>Exit</Button>
  </AppBar>
))

export default MyAppBar