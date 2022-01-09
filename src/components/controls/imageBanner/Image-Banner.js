import React from "react"
import "./Image-Banner.less"
import { Link } from "gatsby"

export default function ImageBanner({
  headertag: Tag = "h2",
  header,
  link,
  src,
  color,
  shadow,
  height,
  width,
}) {
  return (
    <>
      {header && (
        <div
          className="image-banner"
          style={{
            backgroundImage: "url(" + src + ")",
            height: height,
            width: width,
          }}
        >
          {link ? (
            <Link to={link}>
              <Tag
                className={["splash-header", shadow && "shadow"].join(" ")}
                style={{ color: color }}
              >
                {header}
              </Tag>
            </Link>
          ) : (
            <Tag
              className={["splash-header", shadow && "shadow"].join(" ")}
              style={{ color: color }}
            >
              {header}
            </Tag>
          )}
        </div>
      )}
    </>
  )
}
