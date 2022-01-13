import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { products } from "../../../data/products/products"
import { siteData } from "../../../data/site/sitedata"
import Structure from "../../../components/structure/Structure"
import ImageBanner from "../../../components/controls/imageBanner/Image-Banner"
import Img from "../../../components/controls/img/Img"
import Grid from "../../../components/gridLayout/grid/Grid"
import Widget from "../../../components/gridLayout/widget/Widget"
import BuyForm from "../../../components/controls/buyForm/Buy-Form"
import ShopWindow from "../../../components/controls/shopWindow/Shop-Window"
import * as style from "./product.module.less"

export default function Product(props) {
  const splat = props.params.id || null
  const [amount, setAmount] = useState(1)
  if (splat == null) {
    return <></>
  } else {
    const articleId = splat.match(/(\d{1,})-*/)[1]

    const getProductById = _id => products.find(({ id }) => id === _id)
    const product = getProductById(articleId)
    const savingPrice = Math.round(
      product.price * (product.discountPercent / 100)
    )

    const totalPrice = product.price - savingPrice
    const orderSum = totalPrice * amount
    return (
      <>
        <Helmet>
          <title>
            {siteData.name} - {product.name}
          </title>
          <meta property="og:type" content="content-page" />
        </Helmet>
        <Structure hideInstagram={false}>
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
              <div className={style.priceContainer}>
                {product.discountPercent > 0 && (
                  <>
                    <div className={[style.price, style.discount].join(" ")}>
                      {totalPrice} {product.currency}
                    </div>
                    <div className={style.regularPrice}>
                      {product.price} {product.currency}
                    </div>
                  </>
                )}
                {product.discountPercent <= 0 && (
                  <>
                    <div className={style.price}>
                      {totalPrice} {product.currency}
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
              {amount > 1 ? (
                <div className={style.priceContainer}>
                  {product.discountPercent <= 0 && (
                    <div className={style.price}>
                      Att betala: {orderSum} {product.currency}
                    </div>
                  )}

                  {product.discountPercent > 0 && (
                    <>
                      <div className={[style.price, style.discount].join(" ")}>
                        Att betala: {orderSum} {product.currency}
                      </div>
                      <span>Du sparar: </span>
                      <span className={style.regularPrice}>
                        {product.price * amount} {product.currency}
                      </span>
                    </>
                  )}
                </div>
              ) : null}
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
}
