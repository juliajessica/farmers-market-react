import React from 'react';
import { Link } from 'react-router-dom';
// import SeasonalProduce from './SeasonalProduce';
// import MarketSchedule from './MarketSchedule';


function Nav(){

  return(
    <div>
      <h1>Mora Mora Farm</h1>
      <Link to="/">Home</Link> | <Link to="/seasonalproduce">Seasonal Produce</Link> | <Link to="/marketschedule">Market Schedule</Link>


      <style jsx>{`
        h1 {
          color: green;
        }
        h1:hover {
          color: black;
          opacity: 0.5;
        }
      `}</style>
    </div>

  );
}

export default Nav;
