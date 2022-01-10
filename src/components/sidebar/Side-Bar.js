import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import "./Side-Bar.less"

export default function SideBar({ children, type, isOpen, setIsOpen }) {
  return (
    <>
      <div
        className={["sidebar", type && type, isOpen ? "open" : "closed"].join(
          " "
        )}
      >
        <div className="sidebar-container">
          <div className="sidebar-header">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="sidebar-content">{children}</div>
        </div>
      </div>
    </>
  )
}
