import React, { Component } from "react";
import BlogPost from "./BlogPost";
import { connect } from "react-redux";

class Blog extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="container mt-4 blog-div">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    posts: store.posts
  };
};

export default connect(mapStateToProps)(Blog);
