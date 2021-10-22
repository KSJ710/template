import React from 'react';
import bg from './Background.module.scss';

type Props = {
  color: Color[];
  colorChange: (className: string) => void;
};
type Status = {};

class FormBackground extends React.Component<Props, Status> {
  color: Color[];
  listColor: JSX.Element;

  constructor(props) {
    super(props);
    this.color = props.color;
    this.handleChange = this.handleChange.bind(this);
    this.listColor = props.color.map((color: Color) => (
      <li key={color.id} className={`bg-${color.className} flex-grow text-center`}>
        <button value={color.className} onClick={this.handleChange}>
          {color.name}
        </button>
      </li>
    ));
  }
  handleChange(e) {
    this.props.colorChange(e);
  }

  render() {
    return (
      <ul className={`${bg.selectBackground} flex flex-wrap w-1/2 gap-2 mt-2`}>{this.listColor}</ul>
    );
  }
}

export default FormBackground;
