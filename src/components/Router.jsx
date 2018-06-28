import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SeasonalProduceList from './SeasonalProduceList';
import MarketScheduleList from './MarketScheduleList';
import About from './About';
import Error404 from './Error404';

function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/seasonalproducelist' component={SeasonalProduceList} />
        <Route path='/marketschedulelist' component={MarketScheduleList} />
        <Route path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Router;
