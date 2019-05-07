import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
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

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Chapter: "",
      tests: [],
      scroll_id: "",
      open: false,
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  async componentDidMount() {
    //let response = await API.getNrpaEvents();
    let response = await API.getBlogs();
    this.setState({
      tests: response.series,
      //scroll_id: response.scroll_id,
      loading: false
    });
    console.log(response.series)
    
    //console.log(response);
    // this.setState({
    //   tests: response.series,
    //   scroll_id: response.scroll_id,
    //   loading: false
    // });
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
          {this.state.tests.map((series, i) => {
            return (
              <GridItem key={i} xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      style={{ color: stateParams.color }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {series.fields.title}
                    </Typography>
                    <Typography component="p">
                      {series.fields.description}
                    </Typography>
                    <div>
                      <br />
                      <p>
                        <b>
                          <u>Post date </u>: {series.fields.created_on}
                        </b>
                      </p>
                    </div>
                  </CardContent>
                  <CardActions>
                    {/* <Button
                      href={series.fields.link}
                      target="_blank"
                      sm="true"
                      color={stateParams.tempcolor}
                    >
                      Visit site
                    </Button> */}
                  </CardActions>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(Blogs);
