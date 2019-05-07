import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import RTLNavbarLinks from "./RTLNavbarLinks.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

class Header extends React.Component {
  // function makeBrand() {
  //   var name;
  //   props.routes.map((prop, key) => {
  //     if (prop.layout + prop.path === props.location.pathname) {
  //       name = props.rtlActive ? prop.rtlName : prop.name;
  //     }
  //     return null;
  //   });
  //   return name;
  // }

  render() {
    const { classes, stateParams } = this.props;
    let color = stateParams.headercolor;
    const appBarClasses = classNames({
      [" " + classes[color]]: color
    });
    //console.log(stateParams.tokenset);
    return (
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name */}
            <Button
              style={{ fontWeight: "bold" }}
              color="transparent"
              href="#"
              className={classes.title}
            >
              {/* {makeBrand()} */}
              {"FUSE AFFILIATE"}
            </Button>
            <Link to="/admin/home">
              <Button
                style={{ color: "#fff" }}
                color="transparent"
                className={classes.title}
              >
                {/* {makeBrand()} */}
                {"Home"}
              </Button>
            </Link>
            <Link to="/admin/events">
              <Button
                style={{ color: "#fff" }}
                color="transparent"
                className={classes.title}
              >
                {/* {makeBrand()} */}
                {"Events"}
              </Button>
            </Link>
            <Link to="/admin/webinars">
              <Button
                style={{ color: "#fff" }}
                color="transparent"
                className={classes.title}
              >
                {/* {makeBrand()} */}
                {"Webinars"}
              </Button>
            </Link>
            <Link to="/admin/blogs">
              <Button
                style={{ color: "#fff" }}
                color="transparent"
                className={classes.title}
              >
                {/* {makeBrand()} */}
                {"Blogs"}
              </Button>
            </Link>
            <Link to="/admin/gallery">
              <Button
                style={{ color: "#fff" }}
                color="transparent"
                className={classes.title}
              >
                {/* {makeBrand()} */}
                {"Gallery"}
              </Button>
            </Link>
          </div>
          <Hidden smDown implementation="css">
            {this.props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.props.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
