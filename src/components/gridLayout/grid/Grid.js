import React from "react"
import * as style from "./grid.module.less"

export default function Grid({ children, isFull }) {
  return (
    <div className={[style.section, isFull && style.isFull].join(" ")}>
      <div className={style.grid}>{children}</div>
    </div>
  )
}
