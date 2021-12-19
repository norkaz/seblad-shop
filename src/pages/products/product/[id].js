import React from 'react'
import Structure from '../../../components/structure/Structure';
import { products } from '../../../data/products/products';

export default function Product(props) {
  const splat = props.params.id
  const articleId = splat.match(/(\d{1,})-*/)[1]
  
  const getProductById = _id => products.find(({id}) => id === _id)
  const product = getProductById(articleId)

  console.log(articleId)
  console.log(getProductById(articleId))
  
  return (
    <Structure>
      {product.name}
    </Structure>
  )
}
