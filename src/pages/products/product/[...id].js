import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { products } from "../../../data/products/products"
import { siteData } from "../../../data/site/sitedata"
import Structure from "../../../components/structure/Structure"
import Img from "../../../components/controls/img/Img"
import BuyForm from "../../../components/controls/buyForm/Buy-Form"
import ShopWindow from "../../../components/controls/shopWindow/Shop-Window"
import "./product.less"

export default function Product(props) {
  const splat = props.params.id || "1"
  const articleId = splat.match(/(\d{1,})-*/)[1]

  const getProductById = _id => products.find(({ id }) => id === _id)
  const product = getProductById(articleId)

  const savingPrice = Math.round(
    product.price * (product.discountPercent / 100)
  )

  const totalPrice = product.price - savingPrice
  const [amount, setAmount] = useState(1)
  const orderSum = totalPrice * amount
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
          src={"https://facegram.se/CDN/13-2.jpg"}
          header={product.name}
          headertag={"h1"}
          color={"#FFF"}
          shadow={false}
        />
        <div className="test"></div>
        <div className="section product-info">
          <div className="grid">
            <div className="column">
              <div className="product-image">
                {savingPrice ? (
                  <span className="badge">{product.discountPercent + "%"}</span>
                ) : null}
                <Img
                  popup={true}
                  srcLarge={[
                    "https://facegram.se/CDNproducts/articlenumbers/",
                    product.artNr,
                    "_XL.jpg",
                  ].join("")}
                  src={[
                    "https://facegram.se/CDNproducts/articlenumbers/",
                    product.artNr,
                    "_L.jpg",
                  ].join("")}
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
                  {product.discountPercent > 0 && (
                    <>
                      <div className="price discount">
                        {orderSum} {product.currency}
                      </div>
                      <div className="regular-price">
                        {product.price * amount} {product.currency}
                      </div>
                    </>
                  )}
                  {product.discountPercent <= 0 && (
                    <>
                      <div className="price">
                        {orderSum} {product.currency}
                      </div>
                    </>
                  )}
                </div>
                <p>{product.description}</p>
                <BuyForm
                  totalPrice={totalPrice}
                  product={product}
                  savingPrice={savingPrice}
                  orderSum={orderSum}
                  amount={amount}
                  setAmount={setAmount}
                />
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
