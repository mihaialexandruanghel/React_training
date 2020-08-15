/* eslint-disable react/self-closing-comp */
import * as React from 'react'
import PaddingTable from './components/table-component/terra-table.component'
import Popup from './components/popup-component/popup-component.component'

export const StartingPage = () => {
  return (
    <div>
      <h1>This is a table</h1>
      <PaddingTable></PaddingTable>
      <h1>This is a popup</h1>
      <Popup></Popup>
    </div>
  )
}
