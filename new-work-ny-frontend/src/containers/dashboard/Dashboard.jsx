import React, { Component } from "react";
import { Layout, Button } from "antd";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import "./Dashboard.css";
import background from "../../nycPic.jpg";
import { connect } from "react-redux";
import * as actions from "../../actions";
import NewPostModal from "../../components/posts/NewPostModal";
import Posts from "../../components/posts/postsContainer/Posts";
import { useEffect, useState } from "react";

const { Header } = Layout;

class Dashboard extends Component {
  render() {
    const currentUser = this.props.user;
    const newPost = this.props.newPost;
    const getAllPosts = this.props.getAllPosts;
    const posts = this.props.posts;

    return (
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
          height: "800px",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Header
            style={{
              background: "none",
              padding: "1%",
              backdropFilter: "blur(5px) saturate(120%) contrast(100%)",
            }}
            id="header"
          >
            NEW WORK NEW YORK
          </Header>

          <NewPostModal currentUser={currentUser} newPost={newPost} />
          <Posts getAllPosts={getAllPosts} posts={posts} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts,
  };
};

export default connect(mapStateToProps, actions)(Dashboard);
