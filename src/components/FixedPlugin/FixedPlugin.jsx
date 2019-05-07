/*eslint-disable*/
import React, { Component } from "react";
import classnames from "classnames";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

import Button from "components/CustomButtons/Button.jsx";
import Switch from "@material-ui/core/Switch";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
      bg_checked: true,
      bgImage: this.props.bgImage,
      checkedB: this.props.checkedB,
      tokenset: true,
      headercolors: [],
      widgetcolors: [],
      footercolors: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }
  componentDidMount() {}
  render() {
    const headercolors = this.props.headercolors;
    const widgetcolors = this.props.widgetcolors;
    const footercolors = this.props.footercolors;

    return (
      <div
        className={classnames("fixed-plugin", {
          "rtl-fixed-plugin": this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">HEADER COLORS</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  {/* <span
                    className={
                      this.props.headercolor === "primary"
                        ? "badge filter badge-purple active"
                        : "badge filter badge-purple"
                    }
                    data-color="purple"
                    onClick={() => {
                      this.props.handleHeaderColorClick("purple", "primary");
                    }}
                  />
                  <span
                    className={
                      this.props.headercolor === "info"
                        ? "badge filter badge-blue active"
                        : "badge filter badge-blue"
                    }
                    data-color="blue"
                    onClick={() => {
                      this.props.handleHeaderColorClick("blue", "info");
                    }}
                  />
                  <span
                    className={
                      this.props.headercolor === "success"
                        ? "badge filter badge-green active"
                        : "badge filter badge-green"
                    }
                    data-color="green"
                    onClick={() => {
                      this.props.handleHeaderColorClick("green", "success");
                    }}
                  />
                  <span
                    className={
                      this.props.headercolor === "danger"
                        ? "badge filter badge-red active"
                        : "badge filter badge-red"
                    }
                    data-color="red"
                    onClick={() => {
                      this.props.handleHeaderColorClick("red", "danger");
                    }}
                  /> */}
                  {headercolors.map((color, i) => {
                    console.log(color);
                    if (color === "#00bbff") {
                      var col = "blue",
                        vcol = "info";
                    } else if (color === "#9c27b0") {
                      var col = "purple",
                        vcol = "primary";
                    } else if (color === "#ff9800") {
                      var col = "orange",
                        vcol = "warning";
                    } else if (color === "#4caf50") {
                      var col = "green",
                        vcol = "success";
                    } else {
                      var col = "red",
                        vcol = "danger";
                    }
                    return (
                      <span
                        key={i}
                        className={
                          this.props.headercolor === vcol
                            ? "badge filter badge-" + col + " active"
                            : "badge filter badge-" + col + ""
                        }
                        data-color={col}
                        onClick={() => {
                          this.props.handleHeaderColorClick(col, vcol);
                        }}
                      />
                    );
                  })}
                </div>
              </a>
            </li>
            <li className="header-title">WIDGET COLORS</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  {widgetcolors.map((color, i) => {
                    console.log(color);
                    if (color === "#00bbff") {
                      var col = "blue",
                        vcol = "info";
                    } else if (color === "#9c27b0") {
                      var col = "purple",
                        vcol = "primary";
                    } else if (color === "#ff9800") {
                      var col = "orange",
                        vcol = "warning";
                    } else if (color === "#4caf50") {
                      var col = "green",
                        vcol = "success";
                    } else {
                      var col = "red",
                        vcol = "danger";
                    }
                    return (
                      <span
                        key={i}
                        className={
                          this.props.bgColor === vcol
                            ? "badge filter badge-" + col + " active"
                            : "badge filter badge-" + col + ""
                        }
                        data-color={col}
                        onClick={() => {
                          this.props.handleColorClick(col, vcol);
                        }}
                      />
                    );
                  })}
                </div>
              </a>
            </li>
            <li className="header-title">FOOTER COLORS</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  {footercolors.map((color, i) => {
                    console.log(color);
                    if (color === "#00bbff") {
                      var col = "blue",
                        vcol = "info";
                    } else if (color === "#9c27b0") {
                      var col = "purple",
                        vcol = "primary";
                    } else if (color === "#ff9800") {
                      var col = "orange",
                        vcol = "warning";
                    } else if (color === "#4caf50") {
                      var col = "green",
                        vcol = "success";
                    } else {
                      var col = "red",
                        vcol = "danger";
                    }
                    return (
                      <span
                        key={i}
                        className={
                          this.props.headercolor === vcol
                            ? "badge filter badge-" + col + " active"
                            : "badge filter badge-" + col + ""
                        }
                        data-color={col}
                        onClick={() => {
                          //this.props.handleColorClick(col, vcol);
                        }}
                      />
                    );
                  })}
                </div>
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine1 });
                  this.props.handleImageClick(imagine1);
                }}
              >
                <img src={imagine1} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine2 });
                  this.props.handleImageClick(imagine2);
                }}
              >
                <img src={imagine2} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine3 });
                  this.props.handleImageClick(imagine3);
                }}
              >
                <img src={imagine3} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine4 });
                  this.props.handleImageClick(imagine4);
                }}
              >
                <img src={imagine4} alt="..." />
              </a>
            </li>
            <li className="header-title">&nbsp;</li>
            {/* <li className="header-title">Hide Content</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <Switch
                  checked={this.state.checkedB}
                  onChange={() => {
                    this.setState({ checkedB: !this.state.checkedB });
                    this.props.handleSwitchChange("checkedB");
                  }}
                  value="checkedB"
                  color="primary"
                />
              </a>
            </li> */}
            {this.state.tokenset ? (
              <li className="button-container">
                <div className="button-container">
                  <Button
                    color="success"
                    fullWidth
                    onClick={this.props.saveConfig}
                  >
                    Save Config
                  </Button>
                </div>
              </li>
            ) : null}
            {/*<li className="button-container">
              <div className="button-container">
                <Button
                  color="warning"
                  href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                  target="_blank"
                  fullWidth
                >
                  Get PRO version
                </Button>
              </div>
            </li>
            <li className="button-container">
              <Button
                color="info"
                fullWidth
                href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial"
                target="_blank"
              >
                Documentation
              </Button>
            </li> */}
            <li className="adjustments-line" />
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
