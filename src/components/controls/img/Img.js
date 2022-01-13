import React from "react"
import ModalImage from "react-modal-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import * as style from "./image.module.less"

export default function Img({ src, srcLarge, alt, height, width, popup }) {
  return (
    <>
      {popup ? (
        <div className={[style.respImg, style.popup].join(" ")}>
          <ModalImage
            className={style.respImgPopup}
            small={src}
            large={srcLarge ? srcLarge : src}
            alt={alt}
          />
          <FontAwesomeIcon
            icon={faSearchPlus}
            className={style.searchIcon}
            color="#FFF"
          />
        </div>
      ) : (
        <div className={style.respImg}>
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
