import React from "react"

const Image = ({ src, link, wrapperClass, label }) => (
  <div className={`${wrapperClass} image`}>
    <a href={link}>
      <img src={require(`../../images/${src}`)} alt={label} />
      <div className="label">
        {label}
      </div>
    </a>
  </div>
)

export default Image
