import React from "react"
import * as style from "./grid.module.less"

export default function Grid({ children, className }) {
  return (
    <div className={["section", className].join(" ")}>
      <div className={style.grid}>{children}</div>
    </div>
  )
}
