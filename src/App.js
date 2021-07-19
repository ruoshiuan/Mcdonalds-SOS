import React from 'react'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Register/LoginPage'
import MemberPage from './pages/Member/MemberPage'
import FoodPage from './pages/Menu/FoodPage'
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
