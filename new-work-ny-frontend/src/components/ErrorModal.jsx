import React from "react";
import { Layout, Modal, Button } from "antd";
const { Header } = Layout;

const ErrorModal = ({ message, visible, setVisible }) => {
  console.log(message);
  return (
    <Modal onCancel={() => setVisible(false)} visible={visible} footer={null}>
      <Header style={{ background: "none" }}>{message}</Header>
    </Modal>
  );
};

export default ErrorModal;
