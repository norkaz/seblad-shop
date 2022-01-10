import React from "react"

export default function Widget({ children, className }) {
  return <div className={["widget", className].join(" ")}>{children}</div>
}
