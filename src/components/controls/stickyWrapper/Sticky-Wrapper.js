import React, { useRef, useState, useEffect } from "react"
import * as style from "./sticky-wrapper.module.less"

export default function StickyWrapper({ children, ...rest }) {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef()

  // mount
  useEffect(() => {
    console.log(ref.current.clientHeight)
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        {
          threshold: [1],
          // rootMargin: '-1px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
        }
      )

    observer.observe(cachedRef)

    // unmount
    return function () {
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <div
      className={[style.stickyWrapper, isSticky ? style.isSticky : null].join(
        " "
      )}
      ref={ref}
      style={{}}
      {...rest}
    >
      <div className={style.stickyTarget}>{children}</div>
    </div>
  )
}
