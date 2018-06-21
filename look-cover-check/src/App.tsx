import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Configure from './Components/Configure';
import Test from './Components/Test';
import Words from './Components/Words';

const App = () => (
  <Switch>
    <Route exact={true} path='/' component={Words}/>
    <Route exact={true} path='/test' component={Test}/>
    <Route exact={true} path='/configure' component={Configure}/>
  </Switch>
)

export default App;