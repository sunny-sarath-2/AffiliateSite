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

class Event2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Chapter: "",
      tests: [],
      category: [],
      open: false,
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  async componentDidMount() {
    let response = await API.getAscaAffiliatesContent1();
    this.setState({
      tests: response.fields,
      category: response.fields.category,
      loading: false
    });
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
    //console.log(stateParams.checkedB);
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
              </CardHeader>
              <CardBody>
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
                    __html: this.state.tests.content
                  }}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color={stateParams.tempcolor}>
                <h4
                  style={{ fontSize: "25px", fontWeight: "500" }}
                  className={classes.cardTitleWhite}
                >
                  {"Categories"}
                </h4>
              </CardHeader>
              <CardBody>
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
                  {this.state.category.map((cat, i) => {
                    return <div key={i}>{cat}</div>;
                  })}
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={8} md={8}>
            <Card>
              <CardHeader color={stateParams.tempcolor}>
                <h4
                  style={{ fontSize: "25px", fontWeight: "500" }}
                  className={classes.cardTitleWhite}
                >
                  {"Links"}
                </h4>
              </CardHeader>
              <CardBody>
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
                  <u>Link</u>:
                  <a target="_blank" href={this.state.tests.link}>
                    {this.state.tests.link}
                  </a>
                  <br />
                  <br />
                  <u>Thumbnail </u>:
                  <a target="_blank" href={this.state.tests.thumbnail}>
                    {this.state.tests.thumbnail}
                  </a>
                  <br />
                  <br />
                  <u>Videostill </u>:
                  <a target="_blank" href={this.state.tests.videostill}>
                    {this.state.tests.videostill}
                  </a>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(Event2);
