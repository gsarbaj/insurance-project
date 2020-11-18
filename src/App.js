import React from 'react';
import './App.css';
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";
import {Route, Switch, Redirect, withRouter, BrowserRouter} from 'react-router-dom'
import Automobilio from "./Layout/Automobilio/Automobilio";
import Turto from "./Layout/Turto/Turto";
import Gyv from "./Layout/Gyv/Gyv";

function App() {

  let routes = (
      <Switch>
        <Route path={'/turto'} component={Turto}/>
        <Route path={'/automobilio'} component={Automobilio}/>
        <Route path={'/gyvybės'} component={Gyv}/>
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
