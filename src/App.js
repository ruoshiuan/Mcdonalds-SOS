import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MemberPage from './pages/MemberPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage }  />
        <Route exact path="/member" component={ MemberPage }  />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  )
}

export default App
