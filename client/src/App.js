import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SerachEvent from './components/Common/SerachEvent/SearchEvent.js'
import Header from './components/Common/Header/Header'
import Events from './components/Layout/Events/Events'
import UserHome from './components/Layout/UserHome/UserHome'

function App () {
  return (
    <Router>
      <Header />
      <SerachEvent/>
      <Switch>
        <Route exact path = '/' component={Events}/>
        <Route exact path="/home" component={UserHome} />
      </Switch>
    </Router>
  )
}

export default App
