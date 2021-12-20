import React from "react"
import ModalImage from "react-modal-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import "./Img.less"

export default function Img({ headertag: Tag = "h2", ...props }) {
  return (
    <>
      {props.header && props.link ? (
        <Link to={props.link}>
          <div
            className="resp-img"
            style={{ backgroundImage: "url(" + props.src + ")" }}
          >
            <Tag
              className="splash-header"
              style={
                props.shadow
                  ? { textShadow: "0px 0px 18px #000", color: props.color }
                  : { color: props.color }
              }
            >
              {props.header}
            </Tag>
          </div>
        </Link>
      ) : props.header ? (
        <div
          className="resp-img"
          style={{ backgroundImage: "url(" + props.src + ")" }}
        >
          <Tag
            className="splash-header"
            style={
              props.shadow
                ? { textShadow: "0px 0px 18px #000", color: props.color }
                : { color: props.color }
            }
          >
            {props.header}
          </Tag>
        </div>
      ) : props.popup ? (
        <div className="resp-img popup">
          <ModalImage
            className="resp-img-popup"
            small={props.src}
            large={props.srcLarge ? props.srcLarge : props.src}
            alt={props.alt}
          />
          <FontAwesomeIcon icon={faSearchPlus} color="#FFF" />
        </div>
      ) : (
        <div className="resp-img">
          <img
            src={props.src}
            height={props.height}
            width={props.width}
            alt={props.alt ? props.alt : "Bild"}
          />
        </div>
      )}
    </>
  )
}
