import './App.css';
import './Ladding.css'
import notfound from './404'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Login from './Ladding'
import Signup from './Register'
import Pass from './frgp'

import Loading from './Loading'
import Home from './Gifaby.js'
import './Ladding.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_fbPDKuFkNsP9l0bXfvP5UY99YaKZaE",
  authDomain: "gifaby-9c6aa.firebaseapp.com",
  databaseURL: "https://gifaby-9c6aa.firebaseio.com",
  projectId: "gifaby-9c6aa",
  storageBucket: "gifaby-9c6aa.appspot.com",
  messagingSenderId: "26428908",
  appId: "1:26428908:web:fc86009d31da379318acc9",
  measurementId: "G-FZ0KL5JLRH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage, firebaseConfig }

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}



export class App extends Component {

  constructor(props){
    super(props)
      this.state = {
        loaded: false,
      }
    }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state
    if(!loaded){
      return(
        <Loading />
      )
    }
    if(!loggedIn){
      return (
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/load' component={Loading} />
            <Route path='/reset' component={Pass} />
            <Route component={notfound} />
          </Switch>
        </Router>

      );
    }
    if(loggedIn){
    return(
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={notfound} />
          </Switch>
        </Router>
      </Provider>
    )}
  }
}

export default App;
