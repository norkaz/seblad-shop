import React from "react"
import "./Video.less"

export default function Video({
  src,
  type,
  muted,
  loop,
  autoplay,
  caption,
  poster,
  controls,
  height,
  width,
  hideInMobile,
}) {
  return (
    <div
      className={["videoContainer", hideInMobile && "hide-mobile"].join(" ")}
      style={{ height: height, width: width }}
    >
      <video
        width={"100%"}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        poster={poster}
        controls={controls}
      >
        <source src={src} type={type} />
        <track
          src={caption}
          kind="captions"
          srcLang="sv"
          label="swedish_captions"
        />
      </video>
    </div>
  )
}
