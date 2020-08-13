import React from "react";
import { useState } from "react";
import { Button, Layout, Space } from "antd";
import { Form, Input } from "antd";
import "./SignUp.css";
const { Header } = Layout;

const SignUp = ({ handleSubmit, setAlertView, setAlertMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleSend = () => {
    let data = {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    };
    setAlertView(true);
    setAlertMessage("Thanks for signing up! Please login");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
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
              onChange={(event) => setFirstName(event.target.value)}
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
              onChange={(event) => setLastName(event.target.value)}
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
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
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
              onChange={(event) => setPasswordConfirmation(event.target.value)}
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
              onClick={handleSend}
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
