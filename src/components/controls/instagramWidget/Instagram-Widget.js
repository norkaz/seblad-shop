import React from "react"
import "./Instagram-Widget.less"

export default function InstagramWidget({ lightWidgetId, title }) {
  return (
    <>
      <div className="instagram-widget">
        <h3>{title}</h3>
        <iframe
          title="instagram"
          src={["//lightwidget.com/widgets/", lightWidgetId, ".html"].join("")}
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget"
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
