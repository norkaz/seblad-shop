import React from "react"
import { Link } from "gatsby"
import * as style from "./image-banner.module.less"

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
          className={style.imageBanner}
          style={{
            backgroundImage: "url(" + src + ")",
            height: height,
            width: width,
          }}
        >
          {link ? (
            <Link to={link}>
              <Tag
                className={[
                  style.splashHeader,
                  shadow ? style.shadow : "",
                ].join(" ")}
                style={{ color: color }}
              >
                {header}
              </Tag>
            </Link>
          ) : (
            <Tag
              className={[style.splashHeader, shadow ? style.shadow : ""].join(
                " "
              )}
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
