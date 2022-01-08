import React, { useState } from "react"
import "./Buy-Form.less"
import Button from "../../../assets/buttons/Button"
import Input from "../../../assets/inputs/Input"
import { navigate } from "gatsby-link"

export default function BuyForm({
  totalPrice,
  product,
  savingPrice,
  orderSum,
  amount,
  setAmount,
}) {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const [fake, setFake] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

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
        Don’t fill this out:{" "}
        <Input
          name="fake"
          value={fake}
          onChange={event => setFake(event.target.value)}
          hidden
        />
      </div>
      <div className="grid">
        <div className="column">
          <div>För och efternamn</div>
          <Input
            placeholder="Andreas Svensson"
            type="text"
            required
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            className={"form-input"}
          />
        </div>
        <div className="column">
          <div>E-postadress</div>
          <Input
            placeholder="example@gmail.com"
            type="email"
            required
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={"form-input"}
          />
        </div>
      </div>
      <div className="grid">
        <div className="column">
          <div>Mobilnummer</div>
          <Input
            placeholder="+46701234567"
            type="text"
            required
            name="phoneNumber"
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            className={"form-input"}
          />
        </div>
      </div>
      <div className="grid">
        <div className="column">
          <Input hidden name="produkt" />
          <Input hidden name="artikelnummer" />
          <Input hidden name="summa" />
          <Input hidden name="rabatt" />
          <Input
            type="number"
            min="1"
            max="10"
            name="amount"
            value={amount}
            onChange={event => setAmount(event.target.value)}
            className="quantity"
          />
          St
        </div>
      </div>
      <input hidden name="totalsumma" />

      <Button text={"Beställ"} className={"uppercase buy-button"} />
    </form>
  )
}
