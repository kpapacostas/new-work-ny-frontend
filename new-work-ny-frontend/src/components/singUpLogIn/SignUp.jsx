import React from "react";
import { useState } from "react";
import { Button, Layout, Space } from "antd";
import { Form, Input } from "antd";
import "./SignUp.css";
const { Header } = Layout;

const SignUp = ({ handleSubmit, handleFormView, formView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleChange = (event) => {
    let node = event.target.name;
    let fieldData = event.target.value;
    switch (node) {
      case "first_name":
        setFirstName(fieldData);
      case "last_name":
        setLastName(fieldData);
      case "email":
        setEmail(fieldData);
      case "password":
        setPassword(fieldData);
      case "password_confirmation":
        setPasswordConfirmation(fieldData);
    }
  };

  const handleSend = () => {
    let data = {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    };
    handleSubmit("signup", data);
  };

  // if (formView) {
  return (
    <Layout style={{ background: "none", marginTop: "20%" }} id="signup-form">
      <Header
        id="signup"
        style={{ background: "none" }}
        // onClick={() => handleFormView("sign up")}
      >
        SIGN UP
      </Header>
      <br />
      <Form
        type="flex"
        justify="center"
        align="middle"
        name="basic"
        onFinish={handleSend}
        initialValues={{ remember: true }}
        size="medium"
      >
        <Space direction="vertical" size={1}>
          <Form.Item
            className="form-label"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input
              placeholder="FIRST NAME"
              className="input"
              name="first_name"
              onChange={(event) => handleChange(event)}
            />
          </Form.Item>
          <Form.Item
            className="form-label"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input
              placeholder="LAST NAME"
              className="input"
              name="last_name"
              onChange={(event) => handleChange(event)}
            />
          </Form.Item>
          <Form.Item
            className="form-label"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="EMAIL ADDRESS"
              className="input"
              name="email"
              onChange={(event) => handleChange(event)}
            />
          </Form.Item>
          <Form.Item
            className="form-label"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              placeholder="PASSWORD"
              className="input"
              name="password"
              type="password"
              onChange={(event) => handleChange(event)}
            />
          </Form.Item>
          <Form.Item
            className="form-label"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              placeholder="PASSWORD CONFIRMATION"
              className="input"
              name="password_confirmation"
              type="password_confirmation"
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
              className="signin-button"
            >
              SIGN UP
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Layout>
  );
};

export default SignUp;
// } else {
//   return (
//     <div className="grid-element" id="signup-button-only">
//       <Header
//         style={{ background: "none" }}
//         id="sub-header"
//         onClick={() => handleFormView("sign up")}
//       >
//         SIGN UP
//       </Header>
//     </div>
//   );
// }
