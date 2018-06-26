import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import SeasonalProduceList from './SeasonalProduceList';
import MarketSchedule from './MarketSchedule';


function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/seasonalproducelist' component={SeasonalProduceList} />
        <Route path='/marketschedule' component={MarketSchedule} />
      </Switch>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>


    </div>
  );
}

export default App;


// function liveTime(){
// let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);

// }

// setInterval(liveTime, 1000);
