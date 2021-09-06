import React from 'react'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Register/LoginPage'
import MemberPage from './pages/Member/MemberPage'
import FoodPage from './pages/Menu/FoodPage'
import OrderPage from './pages/Order/OrderPage'
import CompletePage from './pages/Complete/CompletePage'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/register' component={ LoginPage } />
        <Route exact path='/member' component={ MemberPage } />
        <Route exact path='/menu' component={ FoodPage } />
        <Route exact path='/order' component={ OrderPage } />
        <Route path="/complete" component={ CompletePage } />
        <Redirect to='/' />
      </Switch>
    </Router>
    </div>
  )
}

export default App
