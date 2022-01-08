import React from "react"
import "./Button.less"

export default function Button({ text, className }) {
  return (
    <button className={[className, "button"].join(" ")} type="submit">
      {text}
    </button>
  )
}
