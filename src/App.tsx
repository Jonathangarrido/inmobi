import React from 'react'

import 'normalize.css'
import { Nav } from '~components/Nav'

export const App = ({children}:any) => {
  return (
    <main className="App">
      <Nav/>
      <div className="Container">
        {children}
      </div>
    </main>
  )
}
