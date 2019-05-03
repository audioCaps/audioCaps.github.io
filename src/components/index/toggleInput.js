import React from "react"
import "./toggle.scss"

const Toggle = ({toggle}) => (
  <div className="tg-list-item">
    <input
      onChange={toggle}
      className="tgl tgl-light"
      id="cb1"
      type="checkbox"
    />
    <label className="tgl-btn" htmlFor="cb1"></label>
  </div>
)
export default Toggle
