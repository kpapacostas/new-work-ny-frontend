import React from "react";
import { Layout, Modal, Button } from "antd";
const { Header } = Layout;

const ErrorModal = ({ message, visible, setAlertView }) => {
  return (
    <Modal
      onCancel={() => setAlertView(false)}
      title="NEW POST"
      visible={visible}
      footer={null}
    >
      <Header style={{ backgroud: "none" }}>{message}</Header>
    </Modal>
  );
};

export default ErrorModal;
