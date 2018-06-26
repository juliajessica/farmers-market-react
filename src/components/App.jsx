import React from 'react';
import Nav from './Nav';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/seasonalproduce' component={SeasonalProduce} />
        <Route path='/marketschedule' component={MarketSchedule} />
      </Switch>
    </div>
  );
}

export default App;


// function liveTime(){
// let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);

// }

// setInterval(liveTime, 1000);
