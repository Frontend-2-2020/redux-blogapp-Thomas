import React, { Component } from "react";
import { connect } from "react-redux";

class Comment extends Component {
  render() {
    const { comment } = this.props;
    if (this.props.isLoggedIn == true) {
      return (
        <div className="card">
          <div className="card-header">Comment {comment.id}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{comment.comment}</p>
              <footer className="blockquote-footer">{comment.name}</footer>
            </blockquote>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = store => {
  return {
    isLoggedIn: store.auth
  };
};

export default connect(mapStateToProps)(Comment);
