import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginBtn extends Component {
  render() {
    const { isLoggedIn, login } = this.props;
    if (this.props.isLoggedIn) {
      return (
        <button disabled className="nav-item btn btn-secondary">
          Logout
        </button>
      );
    } else {
      return (
        <button className="nav-item btn btn-secondary" onClick={login}>
          Login
        </button>
      );
    }
  }
}

LoginBtn.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = store => {
  return {
    isLoggedIn: store.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch({ type: "LOGIN" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
