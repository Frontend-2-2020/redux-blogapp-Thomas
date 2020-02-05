import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";

class BlogPost extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="blogpost mb-4">
        <div className="card">
          <div className="card-header">{post.createdAt}</div>
          <div className="card-body">
            <h5 className="card-title">{post.name}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>

        <div class="card-group">
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    posts: store.posts
  };
};

export default connect(mapStateToProps)(BlogPost);
