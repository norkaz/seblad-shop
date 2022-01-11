import React from "react"
import * as style from "./button.module.less"

export default function Button({ text, className, type, uppercase }) {
  return (
    <button
      className={[
        className,
        style.button,
        uppercase && style.buttonUppercase,
      ].join(" ")}
      type={type}
    >
      {text}
    </button>
  )
}
