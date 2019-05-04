import React from "react"

export const Image = ({ fileName }) => (
  <img src={require(`../../images/${fileName}`)} alt={fileName} />
)

const ImageWithLabel = ({ fileName, link, wrapperClass, label }) => (
  <div className={`${wrapperClass} image`}>
    <a href={link}>
      <Image fileName={fileName} />
      <div className="label">{label}</div>
    </a>
  </div>
)

export default ImageWithLabel
