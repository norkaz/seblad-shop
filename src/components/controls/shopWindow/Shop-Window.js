import React from "react"
import "./Shop-Window.less"
import { products } from "../../../data/products/products"
import { Link } from "gatsby"
import Img from "../img/Img"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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
          return (
            <div key={key} className="item">
              <Link to={productUrl}>
                <div className="border-wrapper">
                  <div className="image">
                    {savingPrice ? (
                      <span className="badge">
                        {product.discountPercent + "%"}
                      </span>
                    ) : null}
                    <Img
                      src={
                        "https://facegram.se/CDNproducts/articlenumbers/" +
                        product.artNr +
                        ".jpg"
                      }
                      alt={product.name}
                      width="400px"
                      height="400px"
                    />
                  </div>
                  <div className="item-info">
                    <div className="name">{product.name}</div>
                    <div className="intro">{product.intro}</div>
                    <div className="price-container">
                      {savingPrice ? (
                        <>
                          <div className="price discount">
                            {product.price - savingPrice} {product.currency}
                          </div>
                          <div className="regular-price">
                            {product.price} {product.currency}
                          </div>
                        </>
                      ) : (
                        <div className="price">
                          {product.price} {product.currency}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}
