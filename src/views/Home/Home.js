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
import { Timeline } from "react-twitter-widgets";
import appController from "../../controller/controller";

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

class Home extends React.Component {
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
  componentDidMount() {
    this.setState({
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
    //console.log(stateParams);
    if (this.state.loading === true) {
      return <div>Loading...</div>;
    } else if (stateParams.checkedB === false) {
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color={stateParams.tempcolor}>
                <h4
                  style={{ fontSize: "35px", fontWeight: "500" }}
                  className={classes.cardTitleWhite}
                >
                  {"Hello"}
                </h4>
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
                    >
                      {"Welcome to affiliate site."}
                    </div>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "ASCAtweets"
              }}
              options={{
                // username: "ASCAtweets",
                height: "450"
              }}
              onLoad={() => console.log("Timeline is loaded!")}
            />
          </GridItem>
        </GridContainer>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(Home);
