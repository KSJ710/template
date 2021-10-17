import React from "react"
import FormBackground from "components/form/Background"
import styles from "./Temp00001.module.scss"

type Props = { color: any }
type Status = { background: string }

class Temp00001 extends React.Component<Props, Status> {
  className: string

  constructor(props) {
    super(props)
    this.state = { background: "" }
    console.log(this.className)
  }

  render() {
    return (
      <>
        {console.log(this.props.color)}
        <FormBackground color={this.props.color} />
        <div className={styles.grid}>
          <header
            className={`${styles.header} ${this.state.background}`}></header>
          <main className={styles.main}></main>
          <aside className={styles.sidebar}></aside>
          <footer className={styles.footer}></footer>
        </div>
      </>
    )
  }
}

export default Temp00001
