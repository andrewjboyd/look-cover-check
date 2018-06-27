import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Configure from './Components/Configure';
import Words from './Components/containers/Words';

const App = () => (
  <Switch>
    <Route exact={true} path='/' component={Words}/>
    <Route exact={true} path='/configure' component={Configure}/>
  </Switch>
)

export default App;