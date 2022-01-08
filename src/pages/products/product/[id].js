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

  const [fake, setFake] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState(1)
  const orderSum = totalPrice * amount

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        fake,
        produkt: product.name,
        artikelnummer: product.id,
        summa: [totalPrice, product.currency].join(" "),
        rabatt: [savingPrice, product.currency].join(" "),
        amount,
        totalsumma: [orderSum, product.currency].join(" "),
        name,
        email,
        phoneNumber,
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
                        {orderSum} {product.currency}
                      </div>
                      <div className="regular-price">
                        {product.price} {product.currency}
                      </div>
                    </>
                  ) : (
                    <div className="price">
                      {orderSum} {product.currency}
                    </div>
                  )}
                </div>
                <p>{product.description}</p>
                <form
                  className="product-form"
                  name="contact"
                  method="post"
                  action="/thank-you/"
                  data-netlify="true"
                  data-netlify-honeypot="fake"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input
                        name="fake"
                        value={fake}
                        onChange={event => setFake(event.target.value)}
                      />
                    </label>
                  </div>
                  <div className="grid">
                    <div className="column">
                      <label>
                        <div>För och efternamn</div>
                        <input
                          placeholder="Andreas Svensson"
                          type="text"
                          required
                          name="name"
                          value={name}
                          onChange={event => setName(event.target.value)}
                        />
                      </label>
                    </div>
                    <div className="column">
                      <label>
                        <div>E-postadress</div>
                        <input
                          placeholder="example@gmail.com"
                          type="email"
                          name="email"
                          required
                          value={email}
                          onChange={event => setEmail(event.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="column">
                      <label>
                        <div>Mobilnummer</div>
                        <input
                          placeholder="+46701234567"
                          type="text"
                          name="phoneNumber"
                          required
                          value={phoneNumber}
                          onChange={event => setPhoneNumber(event.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="column">
                      <label>
                        <input hidden name="produkt" />
                        <input hidden name="artikelnummer" />
                        <input hidden name="summa" />
                        <input hidden name="rabatt" />
                        <input
                          className="quantity"
                          type="number"
                          min="1"
                          max="10"
                          name="amount"
                          value={amount}
                          onChange={event => setAmount(event.target.value)}
                        />
                        St
                      </label>
                    </div>
                  </div>
                  <input hidden name="totalsumma" />
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
