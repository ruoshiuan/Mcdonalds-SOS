import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage } />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  )
}

export default App
