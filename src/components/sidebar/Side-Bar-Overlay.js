import React from "react"
import * as style from "./side-bar-overlay.module.less"

export default function SideBarOverlay({ children, isOpen, setIsOpen }) {
  return (
    <>
      <button
        onClick={() => setIsOpen(false)}
        className={[
          style.sideBarOverlay,
          isOpen ? style.open : style.closed,
        ].join(" ")}
      >
        {children}
      </button>
    </>
  )
}
