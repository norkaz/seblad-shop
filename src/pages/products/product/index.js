import React from "react"
import Structure from "../../../components/structure/Structure"
import { Link } from "gatsby"

export default function index() {
  return (
    <Structure>
      <div className="section">
        <div className="text-box">
          <h1>Ingen produkt är vald.</h1>
          <p>
            Gå till <Link to="/products">produkter</Link> eller till{" "}
            <Link to="/">startsidan</Link>.
          </p>
        </div>
      </div>
    </Structure>
  )
}
