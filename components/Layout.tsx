import React, { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import SpNav from "../components/SpNav";
import Main from "../components/Main";
import Hambug from "../components/button/Hambug";
import Footer from "../components/Footer";

class Layout extends React.Component<{}, { screenWidth: number; hambugState: boolean }> {
  widthThreshold: number;

  constructor(props) {
    super(props);
    this.hambugToggle = this.hambugToggle.bind(this);
    this.getWindowSize = this.getWindowSize.bind(this);
    this.widthThreshold = 768;
    this.state = {
      screenWidth: 0,
      hambugState: false,
    };
  }

  hambugToggle() {
    this.setState({ hambugState: !this.state.hambugState });
  }

  getWindowSize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("load", this.getWindowSize);
  }
  componentDidUpdate() {
    window.addEventListener("resize", this.getWindowSize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.getWindowSize);
  }

  render() {
    const widthThreshold = this.widthThreshold;
    const screenWidth = this.state.screenWidth;
    const hambugState = this.state.hambugState;
    return (
      <div className="root">
        <Head>
          <title>My Site</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {hambugState ? <SpNav /> : null}
        {widthThreshold < screenWidth ? (
          <Nav />
        ) : (
          <Hambug hambugState={hambugState} hambugToggle={this.hambugToggle} />
        )}

        {this.props.children}

        {widthThreshold < screenWidth ? <Footer /> : null}

        <style jsx>{`
          .root {
            display: grid;
            grid-template-areas:
              "nav"
              "main"
              "footer";
            grid-template-rows: repeat(3, auto);
            grid-template-columns: repeat(1, auto);
            background-color: #96e600;
          }
        `}</style>
      </div>
    );
  }
}
export default Layout;
