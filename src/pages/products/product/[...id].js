import React from "react"
import Product from "../../../components/product/product"

export default function product(props) {
  console.log(props.params.id)
  return <Product params={props.params.id} />
}
