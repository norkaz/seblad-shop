import React from "react"
import ModalImage from "react-modal-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import "./Img.less"

export default function Img({ src, srcLarge, alt, height, width, popup }) {
  return (
    <>
      {popup ? (
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
