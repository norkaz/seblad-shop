import React, { useState } from "react"
import "./product.less"
import { siteData } from "../../../data/site/sitedata"
import { Helmet } from "react-helmet"
import Structure from "../../../components/structure/Structure"
import Img from "../../../components/controls/img/Img"
import { products } from "../../../data/products/products"
import ShopWindow from "../../../components/controls/shopWindow/Shop-Window"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  console.log(product.name)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        amount,
        email,
        productName: product.name,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
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
                        {totalPrice} {product.currency}
                      </div>
                      <div className="regular-price">
                        {product.price} {product.currency}
                      </div>
                    </>
                  ) : (
                    <div className="price">
                      {totalPrice} {product.currency}
                    </div>
                  )}
                </div>
                <p>{product.description}</p>
                <form
                  name="contact"
                  method="post"
                  action="/thank-you/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input
                        name="bot-field"
                        onChange={event => setName(event.target.value)}
                      />
                    </label>
                  </div>
                  <input
                    name="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                  <input
                    name="amount"
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                  />
                  <input
                    name="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                  <input hidden name="productName" value={product.name} />
                  <p>
                    <button type="submit">Beställ</button>
                  </p>
                </form>
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
