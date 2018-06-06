import React from 'react';
import {MainPage, FilmPage, NotFound} from '../../pages';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routing = () => (

  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/search" component={MainPage} />
    <Route exact path="/search?:query" component={MainPage} />
    <Route exact path="/film/:id" component={FilmPage} />
    <Route path="*" component={NotFound} />
    {/* <Redirect exact from="/film/:tab" to="/film" /> */}
  </Switch>

)

export default Routing;

          
        
