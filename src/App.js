import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MemberPage from './pages/MemberPage'
import FoodPage from './pages/FoodPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/register" component={ LoginPage }  />
        <Route exact path="/member" component={ MemberPage }  />
        <Route exact path='/menu' component={ FoodPage } />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  )
}

export default App
