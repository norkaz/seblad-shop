import React from "react"
import * as style from "./button.module.less"

export default function Button({
  text,
  className,
  type,
  uppercase,
  disabled,
  onClick,
}) {
  return disabled ? (
    <div
      className={[
        style.button,
        className,
        uppercase && style.buttonUppercase,
        style.disabled,
      ].join(" ")}
    >
      {text}
    </div>
  ) : (
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
