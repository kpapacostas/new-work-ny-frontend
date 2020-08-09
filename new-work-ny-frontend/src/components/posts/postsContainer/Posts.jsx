import React, { Component } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Layout, Button, Space, Col, Row, Divider } from "antd";
import PostCard from "../postcard/PostCard";
import { useEffect } from "react";

import "./Posts.css";

const { Header, Sider } = Layout;

const Posts = ({ getAllPosts, posts }) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  const postCards = posts.map((post, i) => (
    <PostCard id="flex-item" post={post} key={post.id} />
  ));

  return (
    <Layout
      type="flex"
      justify="center"
      align="middle"
      style={{ background: "none", padding: "5%" }}
    >
      <Header style={{ background: "none" }} id="looking-header">
        Looking for posts BY:
      </Header>
      <Row id="button-row" justify="center">
        <Space size={"large"}>
          <Col>
            <Button style={{ background: "none" }} id="category-button">
              DANCERS
            </Button>
          </Col>
          <Col>
            <Button style={{ background: "none" }} id="category-button">
              CHOREOGRAPHERS
            </Button>
          </Col>
        </Space>
      </Row>
      <br />
      <br />
      <Divider orientation="center" />
      <div id="container" align="middle" style={{ background: "none" }}>
        <Space size="large">{posts.length ? postCards : null}</Space>
        <Space size="large">{posts.length ? postCards : null}</Space>
        <Space size="large">{posts.length ? postCards : null}</Space>
        <Space size="large">{posts.length ? postCards : null}</Space>
      </div>
    </Layout>
  );
};

export default Posts;
