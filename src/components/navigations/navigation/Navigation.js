import React from "react"
import { menus } from "../../../data/menus/menus"
import { Link } from "gatsby"
import * as style from "./navigation.module.less"

export default function Navigation({
  containerClassName,
  ulClassName,
  liClassName,
  linkClassName,
  linkActiveClassName,
  horizontal,
  menuName,
}) {
  return (
    <div
      className={[
        style.navigation,
        containerClassName,
        horizontal ? style.horizontal : style.vertical,
      ].join(" ")}
    >
      <nav>
        <ul className={[style.menu, ulClassName].join(" ")}>
          {menus[menuName].map((menuItem, index) => {
            return (
              <li
                className={[style.menuItem, liClassName].join(" ")}
                key={index}
              >
                <Link
                  activeClassName={[style.active, linkActiveClassName].join(
                    " "
                  )}
                  className={[style.menuItemLink, linkClassName].join(" ")}
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
