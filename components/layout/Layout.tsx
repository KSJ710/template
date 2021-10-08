import React, { useState, useEffect } from "react"
import Head from "next/head"
import Nav from "components/layout/Nav"
import Footer from "components/layout/Footer"

class Layout extends React.Component<
  {},
  { screenWidth: number; hambugState: boolean }
> {
  widthThreshold: number

  constructor(props) {
    super(props)
    this.getWindowSize = this.getWindowSize.bind(this)
    this.widthThreshold = 768
    this.state = {
      screenWidth: 0,
      hambugState: false,
    }
  }

  getWindowSize() {
    this.setState({ screenWidth: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener("load", this.getWindowSize)
  }
  componentDidUpdate() {
    window.addEventListener("resize", this.getWindowSize)
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.getWindowSize)
  }

  render() {
    const widthThreshold = this.widthThreshold
    const screenWidth = this.state.screenWidth
    const hambugState = this.state.hambugState
    return (
      <div className='root'>
        <Head>
          <title>tMy Site Web</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {this.props.children}

        {widthThreshold < screenWidth ? <Footer /> : null}

        <style jsx>{`
          .root {
            display: grid;
            grid-template-areas:
              "main"
              "footer";
            grid-template-rows: repeat(2, auto);
            grid-template-columns: repeat(1, auto);
            word-break: break-word;
          }
        `}</style>
      </div>
    )
  }
}
export default Layout
