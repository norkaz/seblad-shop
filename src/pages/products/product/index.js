import React from "react"
import Structure from "../../../components/structure/Structure"
import Grid from "../../../components/gridLayout/grid/Grid"
import Widget from "../../../components/gridLayout/widget/Widget"
import { Link } from "gatsby"

export default function index() {
  return (
    <Structure>
      <Grid>
        <Widget>
          <div className="text-box">
            <h1>Ingen produkt är vald.</h1>
            <p>
              Gå till <Link to="/products">produkter</Link> eller till{" "}
              <Link to="/">startsidan</Link>.
            </p>
          </div>
        </Widget>
      </Grid>
    </Structure>
  )
}
