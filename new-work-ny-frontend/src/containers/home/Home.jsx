import React, { Component } from "react";
import { Layout, Button } from "antd";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./Home.css";
import { useHistory } from "react-router-dom";
import background from "../../nycPic.jpg";
import background2 from "../../blknwhite.jpg";
import SULIParallax from "../SignUpLogIn/SULIParallax";
import Dashboard from "../dashboard/Dashboard";
import { connect } from "react-redux";
import * as actions from "../../actions";

const { Header, Sider } = Layout;

class Home extends Component {
  handleSubmit = (dir, data) => {
    if (dir === "login") {
      this.props.loggingIn(null, data);
      this.parallax.scrollTo(2);
    } else {
      this.props.register(null, data);
      this.parallax.scrollTo(2);
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + background2 + ")",
          height: "800px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
        }}
      >
        <Parallax
          pages={3}
          scrolling={true}
          vertical
          ref={(ref) => (this.parallax = ref)}
        >
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundImage: "url(" + background + ")",
              backgroundSize: "cover",
            }}
          >
            <div className="header-container" style={{}}>
              <Header
                style={{
                  background: "none",
                  padding: "30px",
                }}
                className="grid-element"
                id="home-header"
              >
                NEW WORK NEW YORK
              </Header>
              <Button
                style={{ cursor: "pointer", justifyItems: "right" }}
                id="into-button"
                className="grid-element"
                onClick={() => this.parallax.scrollTo(1)}
              >
                GET INTO IT
              </Button>
            </div>
          </ParallaxLayer>
          <SULIParallax handleSubmit={this.handleSubmit} />
        </Parallax>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, actions)(Home);
