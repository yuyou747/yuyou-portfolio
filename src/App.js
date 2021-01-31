import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route, Switch, Redirect } from "react-router-dom";


function App() {


  return (
    <div>

      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/:page?" render={props => <Header {...props} />} />
      </Switch>


    </div>
  );
}

export default App;
