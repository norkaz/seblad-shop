import React from "react"

export default function Grid({ children, full = false, className }) {
  return (
    <div className={["section", className, full ? "full" : ""].join(" ")}>
      <div className="grid">{children}</div>
    </div>
  )
}
