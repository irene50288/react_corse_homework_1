import React, {Fragment} from 'react';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch} from "react-router-dom";
import MainMenu from './MainMenu';
import CartContainer from './pages/Cart/CartContainer';
import store from '../store';


import routes from '../routes';
import {Provider} from "react-redux";

const RouteWithSubroutes = (route, key) => {
  return <Route key={key} {...route} />
};

const App = () => {

  return (
    <Provider store={store}>
      <CartContainer>
        <Router history={createBrowserHistory()}>
          <Fragment>
            <MainMenu/>
            <Switch>
              {routes.map((route, key) => {return RouteWithSubroutes(route, key)})}
            </Switch>
          </Fragment>
        </Router>
      </CartContainer>
    </Provider>

  )
};
export default App;