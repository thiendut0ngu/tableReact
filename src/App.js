import React from 'react'
import './App.css'
import { FilteringTable } from './components/FiltertingTable'
import { RowSelection } from './components/RowSelection'
import { GlobalFilter } from './components/GlobalFilter'
// import { Thien } from './components/Thien'
import { Thien1 } from './components_company/Thien1'
import { BasicTable } from './components/BasicTable'
import { StickyTable } from './components/StickyTable'

function App() {
  return (
    <div className='App'>
      <FilteringTable />
    </div>
  )
}

export default App
