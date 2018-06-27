import React from 'react';

import Nav from './Nav';
import Router from './Router'

function App(){
  return (
    <div>
      <Nav />
      <Router />

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
