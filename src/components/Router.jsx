import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SeasonalProduceList from './SeasonalProduceList';
import MarketScheduleList from './MarketScheduleList';

function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/seasonalproducelist' component={SeasonalProduceList} />
        <Route path='/marketschedulelist' component={MarketScheduleList} />
      </Switch>
    </div>
  );
}

export default Router;
