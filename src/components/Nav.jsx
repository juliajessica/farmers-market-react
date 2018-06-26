import React from 'react';
import SeasonalProduce from './SeasonalProduce';
import MarketSchedule from './MarketSchedule'

function Nav(){

  return(
    <div className="green-text">
      <h1>Mora Mora Farm</h1>

      <SeasonalProduce />
      <MarketSchedule />


      <style jsx>{`
        .green-text {
          color: green;
        }
        .green-text:hover {
          background-color: pink;
          opacity: 0.5;
        }
      `}</style>
    </div>

  );
}

export default Nav;
