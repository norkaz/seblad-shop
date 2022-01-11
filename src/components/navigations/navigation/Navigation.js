import React from "react"
import { menus } from "../../../data/menus/menus"
import { Link } from "gatsby"
import * as style from "./navigation.module.less"

export default function Navigation({ className, horizontal, menuName }) {
  return (
    <div className={[style.navigation, className].join(" ")}>
      <nav className={horizontal ? style.horizontal : style.vertical}>
        <ul className={style.menu}>
          {menus[menuName].map((menuItem, index) => {
            return (
              <li className={style.menuItem} key={index}>
                <Link
                  activeClassName={style.active}
                  className={style.menuItemLink}
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
