import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { products } from "../../../data/products/products"
import { siteData } from "../../../data/site/sitedata"
import Structure from "../../structure/Structure"
import ImageBanner from "../imageBanner/Image-Banner"
import Img from "../img/Img"
import Grid from "../../gridLayout/grid/Grid"
import Widget from "../../gridLayout/widget/Widget"
import BuyForm from "../buyForm/Buy-Form"
import ShopWindow from "../shopWindow/Shop-Window"
import * as style from "./product.module.less"

export default function Product({ splat }) {
  const articleId = splat.match(/(\d{1,})-*/)[1]

  const [amount, setAmount] = useState(1)
  const getProductById = _id => products.find(({ id }) => id === _id)
  const product = getProductById(articleId)
  const savingPrice = Math.round(
    product.price * (product.discountPercent / 100)
  )

  const totalPrice = product.price - savingPrice
  const orderSum = totalPrice * amount

  function productPrice() {
    return (
      <>
        <div
          className={[
            style.price,
            product.discountPercent > 0 && style.discount,
          ].join(" ")}
        >
          {amount > 1 && <span className={style.priceLiteral}>Totalt:</span>}
          <span className={style.priceSum}>
            {orderSum} {product.currency}
          </span>
        </div>
        {product.discountPercent > 0 && (
          <>
            <span className={style.priceLiteral}>Ordinarie pris:</span>
            <span className={style.regularPrice}>
              {product.price * amount} {product.currency}
            </span>
          </>
        )}
      </>
    )
  }

  return (
    <>
      <Structure hideInstagram={false}>
        <Helmet>
          <title>
            {siteData.name} - {product.name}
          </title>
          <meta property="og:type" content="content-page" />
        </Helmet>
        <ImageBanner
          src={[
            "https://facegram.se/CDNproducts/articlenumbers/",
            product.artNr,
            "_XL.jpg",
          ].join("")}
          header={product.name}
          headertag="h1"
          color="#FFF"
          shadow={true}
        />
        <div className={style.product}>
          <div className={style.productImage}>
            {savingPrice ? (
              <span className={style.badge}>
                {product.discountPercent + "%"}
              </span>
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
          <div className={style.productInfo}>
            <h1>{product.name}</h1>
            <h2>{product.intro}</h2>
            <p>{product.description}</p>

            <div className={[style.priceContainer, "hide-mobile"].join(" ")}>
              {productPrice()}
            </div>
            <BuyForm
              totalPrice={totalPrice}
              product={product}
              savingPrice={savingPrice}
              orderSum={orderSum}
              amount={amount}
              setAmount={setAmount}
            />
            <div className={[style.priceContainer, "only-mobile"].join(" ")}>
              {productPrice()}
            </div>
          </div>
        </div>
        <Grid>
          <Widget>
            <ShopWindow />
          </Widget>
        </Grid>
      </Structure>
    </>
  )
}
