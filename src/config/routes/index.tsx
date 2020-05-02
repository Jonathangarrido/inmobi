import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { App } from '~app/App'
import { Home } from '~views/Home'
import { Error } from '~views/Error'

export const AppRoutes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </App>
  )
}

