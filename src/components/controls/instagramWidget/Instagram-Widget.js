import React from "react"
import * as style from "./instagram-widget.module.less"

export default function InstagramWidget({ lightWidgetId, title }) {
  return (
    <>
      <div className={style.instagramWidget}>
        <h3>{title}</h3>
        <iframe
          title="instagram"
          src={["//lightwidget.com/widgets/", lightWidgetId, ".html"].join("")}
          scrolling="no"
          allowtransparency="true"
          style={{
            width: "100%",
            overflow: "hidden",
            border: "0",
          }}
        ></iframe>
      </div>
    </>
  )
}
