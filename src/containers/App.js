import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import Home from "../components/Home/Home"
import About from "../components/About/About"
const store = createStore(rootReducer);

function App() {

  return (
     <Provider store={store}>
         <Router>
             <Switch>
             <Route path="/about" component={About}  />
             <Route path="/login" component={LoginForm} />
             <Route path="/" component={Home}  />
             </Switch>
         </Router>
     </Provider>
  );
}

export default App;
