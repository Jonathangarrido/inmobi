import React from 'react'

import { News } from './News'
import { Promotions } from './Promotions'
import { Search } from './Search'
import { Us } from './Us'
import { RRSS } from './RRSS'

export const Home = () => {
  return (
    <main>
      <News />
      <Promotions />
      <Search />
      <Us />
      <RRSS />
    </main>
  )
}
