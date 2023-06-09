import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import Memories from "../../assets/memories.png";
const NavBar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={Memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
          </div>
        ) : (
   <div></div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
