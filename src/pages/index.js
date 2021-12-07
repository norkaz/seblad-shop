import React from "react"
import Structure from "../components/structure/Structure"
import ShopWindow from "../components/controls/shopWindow/Shop-Window"
import Img from "../components/controls/img/Img"

export default function Home() {
  return (
    <Structure>
      <Img header={'VÄLKOMMEN!'} src={'https://i.redd.it/228r4jaqsmb31.jpg'}/>
      <section>
        <p>
          Irure sint ad cupidatat quis pariatur consequat. <a href="/content/contact">Kontakta mig!</a> Officia esse laboris cupidatat mollit Lorem nulla aliqua voluptate sit cillum dolore. Aliqua minim et excepteur culpa velit laboris nostrud sint irure eiusmod occaecat et.
        </p>
        <p>
          Esse eu dolore velit do aliqua. Et dolor consequat dolor magna in ex ea qui. Adipisicing eu nulla cupidatat sint officia sint aliquip tempor incididunt proident magna occaecat. Laboris laborum veniam tempor velit mollit irure fugiat adipisicing enim nulla sit eu consectetur ipsum. Mollit consequat reprehenderit est consequat sunt sunt commodo id minim deserunt sint deserunt.
        </p>
        <p>
          Velit veniam proident dolor ex irure cillum dolor consequat nisi officia. Proident enim ad cupidatat dolor aliqua est Lorem ea deserunt. Commodo ex enim aliquip eiusmod amet amet. Labore aliqua quis dolor excepteur voluptate sint et ex deserunt dolor. Aute do nisi fugiat veniam irure amet consectetur. Laborum proident dolor est sunt cupidatat esse incididunt cillum qui.
        </p>
      </section>
      <section>     
        <ShopWindow header="Skyltfönster"/>
      </section>
      <section>
        <ShopWindow isCarousel={true} header="Karusell" />    
      </section>
    </Structure>
  )
}