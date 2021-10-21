import React from 'react';
import SelectBg from 'src/components/selectStyle/Background';
import styles from './Temp00001.module.scss';

type Color = {
  id: number;
  className: string;
};
type Props = { color: Color[] };
type Status = { background: string };

class Temp00001 extends React.Component<Props, Status> {
  constructor(props) {
    super(props);
    this.state = { background: '' };
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange(className) {
    this.setState({ background: className });
  }

  render() {
    return (
      <>
        <SelectBg color={this.props.color} colorChange={this.colorChange} />
        <div className={styles.grid}>
          <header className={`${styles.header} ${this.state.background}`}></header>
          <main className={styles.main}></main>
          <aside className={styles.sidebar}></aside>
          <footer className={styles.footer}></footer>
        </div>
      </>
    );
  }
}

export default Temp00001;
