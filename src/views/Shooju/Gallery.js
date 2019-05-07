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

class Gallery extends React.Component {
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
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.card}>
              <CardContent>
                <div
                  className="isotope row row-30 grid-isotope isotope--loaded"
                  data-isotope-layout="fitRows"
                  data-isotope-group="gallery"
                  style={{ position: "relative", height: "809.952px" }}
                >
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="*"
                    style={{ position: "absolute", left: 0, top: 0 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-1-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>SEO Consultants</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 3"
                    style={{ position: "absolute", left: 399, top: 0 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-2-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>SEO Audits</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 3"
                    style={{ position: "absolute", left: 799, top: 0 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-3-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>SEO Packages &amp; Plans</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 2"
                    style={{ position: "absolute", left: 0, top: 269 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-4-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>Web Copywriting</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 3"
                    style={{ position: "absolute", left: 399, top: 269 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-5-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>Keyword Research</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 2"
                    style={{ position: "absolute", left: 799, top: 269 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-6-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>SEO Strategy</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 1"
                    style={{ position: "absolute", left: 0, top: 539 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-7-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>Website Design</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 1"
                    style={{ position: "absolute", left: 399, top: 539 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-8-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>Link Building Services</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="isotope-item col-6 col-lg-4"
                    data-filter="Category 1"
                    style={{ position: "absolute", left: 799, top: 539 }}
                  >
                    <img
                      src="https://livedemo00.template-help.com/wt_58985_v1/images/grid-gallery-9-370x240.jpg"
                      alt="..."
                      width={370}
                      height={240}
                    />
                    <div className="caption">
                      <h6>CMS SEO Services</h6>
                      <a
                        className="btn btn-white btn-sm-3 btn-shadow btn-rect btn-icon btn-icon-left"
                        href="#"
                      >
                        <span className="icon icon-xs mdi-arrow-right-bold">
                          <span>learn more</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(Gallery);
