import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Slide from "@material-ui/core/Slide";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import qs from "query-string";
import API from "../../services/API";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Event1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Chapter: "",
      tests: [],
      sites_map_obj: [],
      open: false,
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  async componentDidMount() {
    let response = await API.getEvents();
    this.setState({
      tests: response.fields,
      loading: false
    });
    //this.props.history.push("/");
  }
  handleChange(e) {
    this.setState({ Chapter: e.target.value });
  }
  handleClickOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { classes, stateParams } = this.props;
    //console.log(stateParams);
    if (this.state.loading === true) {
      return <div>Loading...</div>;
    } else if (stateParams.checkedB === false) {
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color={stateParams.tempcolor}>
                <h4
                  style={{ fontSize: "35px", fontWeight: "500" }}
                  className={classes.cardTitleWhite}
                >
                  {this.state.tests.description}
                </h4>
                <p
                  style={{ fontSize: "20px", fontWeight: "500" }}
                  className={classes.cardCategoryWhite}
                >
                  {this.state.tests.eventcity} {this.state.tests.eventstate}{" "}
                  {" | "}
                  {this.state.tests.start_date}
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div
                      style={{
                        width: "100%",
                        background: "#FFF",
                        color: "#000",
                        padding: "0px",
                        fontSize: "20px",
                        fontWeight: "500"
                      }}
                      dangerouslySetInnerHTML={{
                        __html: this.state.tests.mainbody
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color={stateParams.tempcolor}>
                <h4
                  style={{ fontSize: "25px", fontWeight: "500" }}
                  className={classes.cardTitleWhite}
                >
                  {"Date"}
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <div
                      style={{
                        width: "100%",
                        background: "#FFF",
                        color: "#000",
                        padding: "0px",
                        fontSize: "20px",
                        fontWeight: "500"
                      }}
                    >
                      {this.state.tests.start_date}
                    </div>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color={stateParams.tempcolor}>
                <h4
                  style={{ fontSize: "25px", fontWeight: "500" }}
                  className={classes.cardTitleWhite}
                >
                  {"Location"}
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <div
                      style={{
                        width: "100%",
                        background: "#FFF",
                        color: "#000",
                        padding: "0px",
                        fontSize: "20px",
                        fontWeight: "500"
                      }}
                    >
                      {"City: " + this.state.tests.eventcity}
                      <br />
                      {"State: " + this.state.tests.eventstate}
                    </div>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div>
              <a
                href="https://twitter.com/intent/tweet?screen_name=ASCAtweets&ref_src=twsrc%5Etfw"
                className="twitter-mention-button"
                data-show-count="false"
              >
                Tweet to @ASCAtweets
              </a>
            </div>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
          </GridItem>
        </GridContainer>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(Event1);
