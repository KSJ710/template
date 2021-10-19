import React from "react"
import bg from "./Background.module.scss"

type Color = {
  id: number
  className: string
}
type Props = {
  color: Color[]
  colorChange: (e: any) => void
}
type Status = {}

class FromBackground extends React.Component<Props, Status> {
  color: Color[]
  listColor: JSX.Element

  constructor(props) {
    super(props)
    this.color = props.color
    this.handleChange = this.handleChange.bind(this)
    this.listColor = props.color.map((color) => (
      <li key={color.id} className={color.className}>
        <button value={color.className} onClick={this.handleChange}>
          {color.className}
        </button>
      </li>
    ))
  }
  handleChange(e) {
    this.props.colorChange(e.target.value)
  }

  render() {
    return (
      <ul className={`${bg.selectBackground} flex w-1/2`}>{this.listColor}</ul>
    )
  }
}

export default FromBackground
