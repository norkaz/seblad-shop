import React from "react"
import "./Img.less"
import ModalImage from "react-modal-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function Img({
  headertag: Tag = "h2",
  header,
  link,
  src,
  srcLarge,
  color,
  shadow,
  alt,
  height,
  width,
  popup,
}) {
  return (
    <>
      {header && link ? (
        <Link to={link}>
          <div
            className="resp-img"
            style={{ backgroundImage: "url(" + src + ")" }}
          >
            <Tag
              className="splash-header"
              style={
                shadow
                  ? { textShadow: "0px 0px 18px #000", color: color }
                  : { color: color }
              }
            >
              {header}
            </Tag>
          </div>
        </Link>
      ) : header ? (
        <div
          className="resp-img"
          style={{ backgroundImage: "url(" + src + ")" }}
        >
          <Tag
            className="splash-header"
            style={
              shadow
                ? { textShadow: "0px 0px 18px #000", color: color }
                : { color: color }
            }
          >
            {header}
          </Tag>
        </div>
      ) : popup ? (
        <div className="resp-img popup">
          <ModalImage
            className="resp-img-popup"
            small={src}
            large={srcLarge ? srcLarge : src}
            alt={alt}
          />
          <FontAwesomeIcon icon={faSearchPlus} color="#FFF" />
        </div>
      ) : (
        <div className="resp-img">
          <img
            src={src}
            height={height}
            width={width}
            alt={alt ? alt : "Bild"}
          />
        </div>
      )}
    </>
  )
}
