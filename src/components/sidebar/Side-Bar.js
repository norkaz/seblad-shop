import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import * as style from "./side-bar.module.less"

export default function SideBar({ children, type, isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={[
          style.sideBar,
          type === "top" ? style.top : type === "left" ? style.left : null,
          isOpen ? style.open : style.closed,
        ].join(" ")}
      >
        <div className={style.sideBarContainer}>
          <div className={style.sideBarHeader}>
            <button className={style.closeBtn} onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={style.sideBarContent}>{children}</div>
        </div>
      </div>
    </>
  )
}
