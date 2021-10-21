import React from 'react';
import bg from './Background.module.scss';

type Props = {
  color: Color[];
  colorChange: (e: any) => void;
};
type Status = {};

class FromBackground extends React.Component<Props, Status> {
  color: Color[];
  listColor: JSX.Element;

  constructor(props) {
    super(props);
    this.color = props.color;
    this.handleChange = this.handleChange.bind(this);
    this.listColor = props.color.map((color: Color) => (
      <li key={color.id} className={`bg-${color.className} flex-1`}>
        <button value={color.className} onClick={this.handleChange}>
          {color.name}
        </button>
      </li>
    ));
  }
  handleChange(e) {
    this.props.colorChange(e.target.value);
  }

  render() {
    return (
      <ul className={`${bg.selectBackground} flex flex-wrap w-1/2 gap-2`}>{this.listColor}</ul>
    );
  }
}

export default FromBackground;
