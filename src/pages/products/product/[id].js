import React from "react"
import "./product.less"
import { siteData } from "../../../data/site/sitedata"
import { Helmet } from "react-helmet"
import Structure from "../../../components/structure/Structure"
import Img from "../../../components/controls/img/Img"
import { products } from "../../../data/products/products"
import ShopWindow from "../../../components/controls/shopWindow/Shop-Window"

export default function Product(props) {
  const splat = props.params.id || "1"
  const articleId = splat.match(/(\d{1,})-*/)[1]

  const getProductById = _id => products.find(({ id }) => id === _id)
  const product = getProductById(articleId)

  const savingPrice = Math.round(
    product.price * (product.discountPercent / 100)
  )

  return (
    <>
      <Helmet>
        <title>
          {siteData.name} - {product.name}
        </title>
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <Img
          src="https://facegram.se/CDN/13-2.jpg"
          header={product.name}
          headertag="h1"
          color="#FFF"
          shadow={false}
        />
        <div className="section product-info">
          <div className="grid">
            <div className="column">
              <div className="product-image">
                {savingPrice ? (
                  <span className="badge">{product.discountPercent + "%"}</span>
                ) : null}
                <Img
                  popup={true}
                  srcLarge={
                    "https://facegram.se/CDNproducts/articlenumbers/" +
                    product.artNr +
                    "_XL" +
                    ".jpg"
                  }
                  src={
                    "https://facegram.se/CDNproducts/articlenumbers/" +
                    product.artNr +
                    "_L" +
                    ".jpg"
                  }
                  alt={product.name}
                  width="400px"
                  height="400px"
                />
              </div>
            </div>
            <div className="column">
              <div className="text-box">
                <h2>{product.intro}</h2>
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
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <ShopWindow />
        </div>
      </Structure>
    </>
  )
}