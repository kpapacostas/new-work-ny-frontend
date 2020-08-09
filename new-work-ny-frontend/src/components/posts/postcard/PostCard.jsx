import React from "react";
import { Card, Col, Row } from "antd";

const PostCard = () => {
  return (
    <Card
      style={{ width: "300px" }}
      className="card"
      id="grid-element"
      title="Hello!"
      bordered={false}
    >
      I'm A Card!
    </Card>
  );
};

export default PostCard;
