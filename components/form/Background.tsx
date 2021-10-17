import React from "react"

export default function Color(props) {
  const listColor = props.color.map((color) => (
    <li key={color.id} className={color.className}>
      {color.className}
    </li>
  ))
  return <ul> {listColor} </ul>
}
