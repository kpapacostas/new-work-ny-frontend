import React from "react";
import { Layout, Modal, Button, DatePicker } from "antd";
import { Form, Input } from "antd";
import { useState } from "react";
import moment from "moment";

const { RangePicker } = DatePicker;

const NewPostModal = ({ currentUser, newPost }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");

  const onDateChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  const handleSubmit = () => {
    let author_id = parseInt(window.localStorage.getItem("userId"));
    let data = {
      title,
      description,
      start_date,
      end_date,
      author_id,
    };
    newPost(null, data);
    setVisible(false);
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };

  const buttonStyle = {
    fontFamily: "Andale Mono",
    fontWeight: "medium",
    color: "black",
    alignItems: "center",
    borderColor: "gray",
  };

  const createButtonStyle = {
    fontFamily: "Andale Mono",
    background: "none",
    marginTop: "20px",
    fontWeight: "bold",
    borderColor: "#fff",
    borderWidth: "3.5px",
    boxShadow: "3px 3px #fff",
    margin: "15px",
    float: "left",
    height: "40px",
    width: "170px",
    textShadow:
      "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff",
  };

  return (
    <Layout style={{ background: "none" }}>
      <br />
      <Button style={createButtonStyle} onClick={() => setVisible(!visible)}>
        CREATE NEW POST
      </Button>
      <Modal
        style={
          (buttonStyle,
          {
            borderWidth: "1px",
          })
        }
        onCancel={() => setVisible(false)}
        title="NEW POST"
        visible={visible}
        footer={null}
      >
        <Form
          type="flex"
          justify="left"
          align="left"
          style={{
            fontFamily: "Andale Mono",
            fontWeight: "medium",
          }}
          name="basic"
          onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Post Title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(event) => setTitle(event.target.value)}
              name="title"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(event) => setDescription(event.target.value)}
              name="description"
            />
          </Form.Item>

          <Form.Item
            label="Start Date"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <RangePicker
              ranges={{
                Today: [moment(), moment()],
                "This Month": [
                  moment().startOf("month"),
                  moment().endOf("month"),
                ],
              }}
              onChange={onDateChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="flex"
              align="left"
              style={
                (buttonStyle,
                {
                  borderWidth: "1px",
                  boxShadow: "3px 3px #fff",
                })
              }
              htmlType="submit"
            >
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default NewPostModal;
