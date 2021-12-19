import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allProductsCsv {
        edges {
          node {
            id
            name
            price
            intro
            discountPercent
            discountBadge
            description
            currency
            artNr
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName