import React from "react"
import FormColor from "components/form/Color"
import styles from "./Temp00001.module.scss"

type Props = {}
type Status = {}
class Temp00001 extends React.Component<Props, Status> {
  className: string
  constructor(props) {
    super(props)
    this.className = `${styles.header} ${styles.test}`
  }
  render() {
    return (
      <>
        <FormColor />
        <div className={styles.grid}>
          <header className={this.className}>aaaaa</header>
          <main className={styles.main}></main>
          <aside className={styles.sidebar}></aside>
          <footer className={styles.footer}></footer>
        </div>
      </>
    )
  }
}

export default Temp00001
