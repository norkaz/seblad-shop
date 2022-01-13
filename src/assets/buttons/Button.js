import React from "react"
import * as style from "./button.module.less"

export default function Button({ text, className, type, uppercase, onClick }) {
  return (
    <button
      onClick={onClick}
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
