import React from "react"
import Structure from "../components/structure/Structure"
import ShopWindow from "../components/controls/shopWindow/Shop-Window"

export default function Home() {
  return (
    <Structure>
      <section>
        <p>
          Irure sint ad cupidatat quis pariatur consequat. <a href="/contact">Kontakta mig!</a> Officia esse laboris cupidatat mollit Lorem nulla aliqua voluptate sit cillum dolore. Aliqua minim et excepteur culpa velit laboris nostrud sint irure eiusmod occaecat et.
        </p>
        <p>
          Esse eu dolore velit do aliqua. Et dolor consequat dolor magna in ex ea qui. Adipisicing eu nulla cupidatat sint officia sint aliquip tempor incididunt proident magna occaecat. Laboris laborum veniam tempor velit mollit irure fugiat adipisicing enim nulla sit eu consectetur ipsum. Mollit consequat reprehenderit est consequat sunt sunt commodo id minim deserunt sint deserunt.
        </p>
        <p>
          Velit veniam proident dolor ex irure cillum dolor consequat nisi officia. Proident enim ad cupidatat dolor aliqua est Lorem ea deserunt. Commodo ex enim aliquip eiusmod amet amet. Labore aliqua quis dolor excepteur voluptate sint et ex deserunt dolor. Aute do nisi fugiat veniam irure amet consectetur. Laborum proident dolor est sunt cupidatat esse incididunt cillum qui.
        </p>
      </section>
      <section>
        <ShopWindow type="carousel" header="Karusell" />
        <ShopWindow header="Skyltfönster"/>
      </section>
      <section>
        <img width="3840" height="2160" src="https://lh4.googleusercontent.com/proxy/UOhQwfclsAK8TnXZqoTkh9szHvYOJ3auDH07hZBZeVaaRWvzGaXpaYl60MfCRuW_S57gvzBw859pj5Xl2pW_GpfG8k2GhE9LUFNKwA=w3840-h2160-p-k-no-nd-mv" alt=""/>
      </section>
    </Structure>
  )
}