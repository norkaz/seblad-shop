import React from "react"
import ComponentName from "../data/csv/products"
import Structure from "../components/structure/Structure"
// import sheetsAuth from "../auth/sheet/seblad-keramik-488e5a5f0391.json"
// import { GoogleSpreadsheet } from "google-spreadsheet"

// async function getSheet() {
//   // Initialize the sheet - doc ID is the long id in the sheets URL
//   const doc = new GoogleSpreadsheet(
//     "1AuA96sLgCnB0FXxbx7fIoKVthn_Ua6IEa2RfACQ4ACE"
//   )

//   // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
//   await doc.useServiceAccountAuth(sheetsAuth)

//   await doc.loadInfo() // loads document properties and worksheets
//   console.log(doc.title)

//   const sheet = doc.sheetsByIndex[0] // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
//   console.log(sheet.title)
//   console.log(sheet.rowCount)
// }

export default function Success() {
  return (
    <Structure>
      <section>
        <ComponentName />
      </section>
    </Structure>
  )
}
