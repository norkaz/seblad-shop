import React from "react"
import { siteData } from "../../../data/site/sitedata"
import { Helmet } from "react-helmet"
import "./product.less"
import Structure from "../../../components/structure/Structure"
import Grid from "../../../components/controls/grid/Grid"
import Column from "../../../components/controls/grid/column/Column"
import Text from "../../../components/controls/text/Text"
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
        <Grid gap="20px">
          <Column type="full">
            <Img
              src="https://facegram.se/CDN/13-2.jpg"
              header={product.name}
              headertag="h1"
              color="#FFF"
              shadow={false}
            />
          </Column>
        </Grid>
        <div className="section">
          <Grid gap="20px" type="mobile-full">
            <Column>
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
            </Column>
            <Column>
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
            </Column>
          </Grid>
        </div>
        <section>
          <ShopWindow header="Skyltfönster" />
        </section>
      </Structure>
    </>
  )
}
