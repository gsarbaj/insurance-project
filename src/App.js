import React from 'react';
import './App.css';
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";
import {Route, Switch, Redirect, withRouter, BrowserRouter} from 'react-router-dom'

function App() {

  let routes = (
      <Switch>
        <Route path={'/turto'} component={Header}/>
        <Route path={'/automobilio'} component={Footer}/>
        <Route path={'/'} exact component={Main}/>
        <Redirect to={'/#'}/>
      </Switch>
  )

  return (

    <div className="App">
    <Header/>
      {routes}
    <Footer/>


    </div>

  );
}

export default App;
