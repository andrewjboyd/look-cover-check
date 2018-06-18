import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Configure from './Configure';
import Test from './Test';
import Words from './Words';

// Where should the route go?
const Main = () => (
    <Switch>
      <Route exact={true} path='/' component={Words}/>
      <Route exact={true} path='/test' component={Test}/>
      <Route exact={true} path='/configure' component={Configure}/>
    </Switch>
)

export default Main;  