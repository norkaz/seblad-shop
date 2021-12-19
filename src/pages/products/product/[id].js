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

  return <div>hej</div>
}
