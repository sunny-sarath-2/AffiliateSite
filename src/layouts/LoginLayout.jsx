import React, { Component } from "react";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      error: false,
      errorfileds: [],
      errorMessage: "",
      loading: false,
      showModel: false,
      modelError: "",
      modelHeader: ""
    };

    //window.location.assign("https://localhost:3000/");
    this.Login = this.Login.bind(this);
    this.Register = this.Register.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.closeModel = this.closeModel.bind(this);
    this.ForgetPassword = this.ForgetPassword.bind(this);
    this.getNewPassword = this.getNewPassword.bind(this);
  }
  componentDidMount() {}

  Register() {}

  Login(e) {
    e.preventDefault();
    let _state = this.state;
    this.props.history.push("/admin/events");
    // console.log(appController.validation([_state.userName, _state.password]));
  }

  inputChange(e, field) {
    let value = this.state;
    value.error = false;
    value.errorMessage = "";
    value[field] = e.target.value;
    this.setState({ value: value });
  }

  closeModel() {
    // console.log("close");
    this.setState({ showModel: false });
  }
  ForgetPassword() {}
  getNewPassword() {
    console.log("check");
  }
  render() {
    return (
      <div className="container main form-middle-main">
        <div className="justify-content-center row">
          <div className="col-md-8">
            <div className="card-group">
              <div className="p-4 card">
                <div className="card-body">
                  <form className="all">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <p style={{ color: "red" }}>{this.state.errorMessage}</p>
                    <div className="mb-3 input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user-o" aria-hidden="true" />
                        </span>
                      </div>
                      <input
                        placeholder="Username"
                        autoComplete="username"
                        type="text"
                        className={
                          this.state.errorfileds[1] && this.state.error
                            ? "form-control error-border-color"
                            : "form-control"
                        }
                        value={this.state.userName}
                        onChange={e => {
                          this.inputChange(e, "userName");
                        }}
                      />
                    </div>
                    <div className="mb-4 input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-lock" aria-hidden="true" />
                        </span>
                      </div>
                      <input
                        placeholder="Password"
                        autoComplete="current-password"
                        type="password"
                        className={
                          this.state.errorfileds[2] && this.state.error
                            ? "form-control error-border-color"
                            : "form-control"
                        }
                        onChange={e => {
                          this.inputChange(e, "password");
                        }}
                      />
                    </div>
                    <div className="">
                      <button
                        data-toggle="modal"
                        data-target="#myModal"
                        className="px-4 btn btn-primary"
                        onClick={this.Login}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="text-white bg-primary py-5 d-md-down-none card right-bg"
                style={{}}
              >
                <div className="text-center card-body">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <a>
                      <button
                        tabIndex="-1"
                        className="mt-3 btn btn-primary active"
                        onClick={this.Register}
                      >
                        Register Now!
                      </button>
                    </a>
                    {/* <button
                      tabIndex="-1"
                      className="mt-3 btn btn-primary active"
                      onClick={this.signout}
                    >
                      signout
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.loading ? (
          <div className="loading">Loading&#8230;</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LoginLayout;
