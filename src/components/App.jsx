import React from 'react';

import Nav from './Nav';
import Router from './Router';
import Footer from './Footer';

function App(){
  return (
    <div>
      <Nav />
      <Router />
      <Footer />

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
