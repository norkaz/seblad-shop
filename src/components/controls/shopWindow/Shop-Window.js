import React from "react"
import { products } from "../../../data/products/products"
import Img from "../img/Img"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import * as style from "./shop-window.module.less"

const imgRoute = "https://facegram.se/CDNproducts/articlenumbers/"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1280, min: 920 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 920, min: 0 },
    items: 2,
  },
}

export default function ProductList(props) {
  return (
    <>
      <Carousel responsive={responsive} showDots={true}>
        {products.map((product, key) => {
          const savingPrice = Math.round(
            product.price * (product.discountPercent / 100)
          )
          const productUrl =
            "/products/product/" +
            product.id +
            "-" +
            product.artNr +
            "-" +
            product.intro.replace(/\s/g, "_")

          const productImgUrl = [imgRoute, product.artNr, ".jpg"].join("")
          return (
            <div key={key} className={style.item}>
              <a href={productUrl}>
                <div className={style.borderWrapper}>
                  <div className={style.image}>
                    {savingPrice ? (
                      <span className={style.badge}>
                        {product.discountPercent + "%"}
                      </span>
                    ) : null}
                    <Img
                      src={productImgUrl}
                      alt={product.name}
                      width="400px"
                      height="400px"
                    />
                  </div>
                  <div className={style.itemInfo}>
                    <div className={style.name}>{product.name}</div>
                    <div className={style.intro}>{product.intro}</div>
                    <div className={style.priceContainer}>
                      {savingPrice ? (
                        <>
                          <div
                            className={[style.price, style.discount].join(" ")}
                          >
                            {product.price - savingPrice} {product.currency}
                          </div>
                          <div className={style.regularPrice}>
                            {product.price} {product.currency}
                          </div>
                        </>
                      ) : (
                        <div className={style.price}>
                          {product.price} {product.currency}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}
