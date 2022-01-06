import React from "react"
import { menus } from "../../../data/menus/menus"
import { Link } from "gatsby"
import "./Navigation.less"

export default function Navigation({
  className,
  classType = "horizontal",
  menuName,
}) {
  return (
    <div className={["navigation", className].join(" ")}>
      <nav className={classType}>
        <ul className="menu">
          {menus[menuName].map((menuItem, index) => {
            return (
              <li className="menu-item" key={index}>
                <Link
                  activeClassName="active"
                  className="menu-item-link"
                  to={menuItem.url}
                >
                  {menuItem.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
