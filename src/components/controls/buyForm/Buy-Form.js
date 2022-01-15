import React, { useState } from "react"
import Button from "../../../assets/buttons/Button"
import Input from "../../../assets/inputs/Input"
import { navigate } from "gatsby-link"
import * as style from "./buy-form.module.less"

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
  console.log(amount)
  return (
    <form
      className={style.productForm}
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
      <div className={style.formRow}>
        <div className={style.formColumn}>
          <Input
            label={"För- och efternamn"}
            placeholder="Andreas Svensson"
            type="text"
            required
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            className={style.formInput}
          />
        </div>
        <div className={style.formColumn}>
          <Input
            label={"E-postadress"}
            placeholder="example@gmail.com"
            type="email"
            required
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className={style.formInput}
          />
        </div>
      </div>
      <div className={style.formRow}>
        <div className={style.formColumn}>
          <Input
            label={"Mobilnummer"}
            placeholder="+46701234567"
            type="text"
            required
            name="phoneNumber"
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            className={style.formInput}
          />
        </div>
        <div className={[style.formColumn, style.empty].join(" ")}></div>
      </div>
      <div
        className={[style.formRow, style.formRowBuyButtonContainer].join(" ")}
      >
        <div className={style.formColumn}>
          <Input hidden name="produkt" />
          <Input hidden name="artikelnummer" />
          <Input hidden name="summa" />
          <Input hidden name="rabatt" />
          <div className={style.buyQuantity}>
            <div className={style.quantityWrapper}>
              <Button
                text={"-"}
                type={"button"}
                className={style.quantityButton}
                onClick={() => setAmount(amount > 1 ? --amount : amount)}
              ></Button>
              <div className={style.quantity}>
                <input
                  type="number"
                  min={"1"}
                  max={product.stock}
                  name="amount"
                  value={amount}
                  onChange={event => setAmount(event.target.value)}
                  className={[style.quantityField, style.formInput].join(" ")}
                />
              </div>
              <Button
                text={"+"}
                type={"button"}
                className={style.quantityButton}
                onClick={() =>
                  setAmount(amount < product.stock ? ++amount : amount)
                }
              ></Button>
            </div>
            <Input hidden name={"totalsumma"} />
            <Button
              text={"Beställ"}
              uppercase={true}
              disabled={product.stock >= 1 ? false : true}
              type={"submit"}
              className={style.buyButton}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
