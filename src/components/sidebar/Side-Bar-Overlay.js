import React from "react"
import "./Side-Bar-Overlay.less"

export default function SideBarOverlay({ children, isOpen, setIsOpen }) {
  return (
    <>
      <button
        onClick={() => setIsOpen(false)}
        className={["sidebar-overlay", isOpen ? "open" : "closed"].join(" ")}
      >
        {children}
      </button>
    </>
  )
}
