/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import routes from "routes.js";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import qs from "query-string";
import appController from "../controller/controller";
import API from "../services/API";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            //component={prop.component}
            key={key}
            render={props => <prop.component {...props} stateParams={props} />}
          />
        );
      }
    })}
  </Switch>
);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: localStorage.getItem("image")
        ? localStorage.getItem("image")
        : image,
      color: localStorage.getItem("color")
        ? localStorage.getItem("color")
        : "blue",
      tempcolor: localStorage.getItem("tempcolor")
        ? localStorage.getItem("tempcolor")
        : "primary",
      headercolor: localStorage.getItem("headercolor")
        ? localStorage.getItem("headercolor")
        : "success",
      hasImage: false,
      checkedB: false,
      fixedClasses: "dropdown",
      mobileOpen: false,
      userDetails: [],
      showConfig: true,
      tokenset: false,
      t_headercolors: [],
      t_widgetcolors: [],
      t_footercolors: []
    };
    this.saveConfig = this.saveConfig.bind(this);
  }
  handleImageClick = image => {
    localStorage.setItem("image", image);
    this.setState({ image: image });
  };
  handleColorClick = (color, color1) => {
    localStorage.setItem("color", color);
    localStorage.setItem("tempcolor", color1);
    this.setState({ color: color, tempcolor: color1 });
  };
  handleHeaderColorClick = (color, color1) => {
    localStorage.setItem("headercolor", color1);
    this.setState({ headercolor: color1 });
  };
  handleSwitchChange = name => {
    this.setState({
      checkedB: !this.state.checkedB
    });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/admin/maps";
  }
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  async saveConfig() {
    const { image, headercolor, color, tempcolor } = this.state;
    let checkAccess = await localStorage.getItem("accessToken");
    if (checkAccess) {
      let affiliate = await localStorage.getItem("affiliate");
      let userDetails = await appController.getUser(checkAccess);
      //console.log(userDetails);
      let saveResponse = await API.saveSiteConfig({
        image: image,
        headercolor: headercolor,
        color: color,
        tempcolor: tempcolor,
        userDetails: userDetails,
        affiliate: affiliate
      });
      console.log("saveResponse", saveResponse);
      var con = confirm(
        "Configuration saved successfully. \n Do you want to close this tab ?"
      );
      if (con) {
        window.close();
      }
    }
  }
  async componentDidMount() {
    let url = qs.parse(this.props.location.search);
    //console.log(url.accessToken);
    //console.log(url.strapiToken);
    console.log(url);
    if (url.accessToken != undefined) {
      localStorage.setItem("accessToken", url.accessToken);
      localStorage.setItem("strapiToken", url.strapiToken);
      localStorage.setItem("affiliate", url.affiliate);
      if (url.sitelaunch) {
        await localStorage.setItem("sitelaunch", url.sitelaunch);
        await this.setState({
          showConfig: false
        });
      }
      let userDetails = await appController.getUser(url.accessToken);
      console.log(userDetails.userType);
      if (userDetails.userType === "parent") {
        await this.setState({
          showConfig: false
        });
      }
      let template = await API.getTemplateconfig(userDetails.userName);
      //console.log(template, "templatedata");
      if (template.series.length > 0) {
        await this.setState({
          t_footercolors: template.series[0].fields.footercolors,
          t_headercolors: template.series[0].fields.headercolors,
          t_widgetcolors: template.series[0].fields.widgetcolors
        });
      }
      let affiliate_config = await API.getAffiliateConfig(userDetails.userName);
      //console.log(affiliate_config, "affiliate_config");
      if (affiliate_config.series.length > 0) {
        await this.setState({
          color: affiliate_config.series[0].fields.color,
          headercolor: affiliate_config.series[0].fields.headercolor,
          image: affiliate_config.series[0].fields.image,
          tempcolor: affiliate_config.series[0].fields.tempcolor
          //showConfig: false
        });
      }
      await this.setState({ userDetails: userDetails, tokenset: true });
      await this.props.history.push("/admin/home");
    } else {
      //localStorage.clear();
      this.setState({
        showConfig: false
      });
      // let checkAcsess = localStorage.getItem("accessToken");
      // if (checkAcsess == undefined) {
      //   this.props.history.push("/admin/home");
      // }
    }
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    console.log(this.state.t_headercolors);
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"Creative Tim"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            stateParams={this.state}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div
              style={{
                backgroundImage: `url(${this.state["image"]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
              className={classes.content}
            >
              <div className={classes.container}>
                <Switch>
                  {routes.map((prop, key) => {
                    if (prop.layout === "/admin") {
                      return (
                        <Route
                          path={prop.layout + prop.path}
                          //component={prop.component}
                          key={key}
                          render={props => (
                            <prop.component
                              {...props}
                              stateParams={this.state}
                            />
                          )}
                        />
                      );
                    }
                  })}
                </Switch>
              </div>
            </div>
          ) : (
            <div className={classes.map}>
              <Switch>
                {routes.map((prop, key) => {
                  if (prop.layout === "/admin") {
                    return (
                      <Route
                        path={prop.layout + prop.path}
                        //component={prop.component}
                        key={key}
                        render={props => (
                          <prop.component {...props} stateParams={this.state} />
                        )}
                      />
                    );
                  }
                })}
              </Switch>
            </div>
          )}
          {this.getRoute() ? <Footer /> : null}
          {this.state.showConfig ? (
            <FixedPlugin
              handleImageClick={this.handleImageClick}
              handleColorClick={this.handleColorClick}
              handleHeaderColorClick={this.handleHeaderColorClick}
              handleSwitchChange={this.handleSwitchChange}
              bgColor={this.state["color"]}
              bgImage={this.state["image"]}
              checkedB={this.state["checkedB"]}
              headercolor={this.state["headercolor"]}
              handleFixedClick={this.handleFixedClick}
              fixedClasses={this.state.fixedClasses}
              saveConfig={this.saveConfig}
              tokenset={this.state["tokenset"]}
              headercolors={this.state["t_headercolors"]}
              widgetcolors={this.state["t_widgetcolors"]}
              footercolors={this.state["t_footercolors"]}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
