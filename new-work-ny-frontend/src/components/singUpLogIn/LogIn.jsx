import React from "react";
import { useState } from "react";
import { Layout, Button } from "antd";
import { Form, Input } from "antd";
import { useHistory } from "react-router-dom";

import "./LogIn.css";
const { Header } = Layout;

const LogIn = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    let node = event.target.name;
    let fieldData = event.target.value;
    node === "email" ? setEmail(fieldData) : setPassword(fieldData);
  };

  const handleSend = () => {
    let data = {
      email,
      password,
    };
    handleSubmit("login", data);
    setEmail("");
    setPassword("");
  };

  // if (formView) {
  return (
    <Layout
      style={{ background: "none", marginTop: "20%" }}
      className="grid-element"
      id="login"
    >
      <Header style={{ background: "none" }}>LOGIN</Header>
      <br />
      <Form
        type="flex"
        justify="center"
        align="middle"
        name="basic"
        onFinish={handleSend}
        initialValues={{ remember: true }}
      >
        <Form.Item
          className="form-label"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="EMAIL"
            className="input"
            name="email"
            value={email}
            onChange={(event) => handleChange(event)}
          />
        </Form.Item>
        <br />
        <Form.Item
          className="form-label"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            placeholder="PASSWORD"
            className="input"
            name="password"
            type="password"
            value={password}
            onChange={(event) => handleChange(event)}
          />
        </Form.Item>
        <br />
        <Form.Item>
          <Button
            style={{
              fontFamily: "Andale Mono",
              fontWeight: "bold",
              borderColor: "gray",
              borderWidth: "1px",
              boxShadow: "3px 3px #fff",
            }}
            className="login-button"
            htmlType="submit"
            onClick={handleSend}
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default LogIn;
// } else {
//   return (
//     <Layout
//       style={{ background: "none" }}
//       className="grid-element"
//       id="sub-header"
//     >
//       <Header
//         style={{ background: "none" }}
//         onClick={() => handleFormView("log in")}
//         id="sub-header"
//       >
//         LOGIN
//       </Header>
//     </Layout>
//   );
// }
