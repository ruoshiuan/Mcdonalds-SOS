import React, { useState, useEffect } from 'react'
import firebase from './firestore_db'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Register/LoginPage'
import MemberPage from './pages/Member/MemberPage'
import FoodPage from './pages/Menu/FoodPage'
import OrderPage from './pages/Order/OrderPage'
import CompletePage from './pages/Complete/CompletePage'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true
  })
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthState({
          setAuthState: true,
          initializing: false
        })
      } else {
        setAuthState({
          setAuthState: true,
          initializing: false
        })
      }
    })
  }, [setAuthState])
  if (authentication.initializing) {
    return <div>Loading</div>
  }
  return (
    <div>
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={ HomePage } authenticated={ authentication.authenticated } />
        <Route exact path='/register' component={ LoginPage } />
        <Route exact path='/member' component={ MemberPage } authenticated={ authentication.authenticated } />
        <Route exact path='/menu' component={ FoodPage } authenticated={ authentication.authenticated } />
        <Route exact path='/order' component={ OrderPage } authenticated={ authentication.authenticated } />
        <Route path="/complete" component={ CompletePage } authenticated={ authentication.authenticated } />
        <Redirect to='/' />
      </Switch>
    </Router>
    </div>
  )
}

export default App
