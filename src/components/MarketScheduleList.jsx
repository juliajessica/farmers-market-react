import React from 'react';
import marketSchedule from './ScheduleData';
import MarketSchedule from './MarketSchedule';


function MarketScheduleList(){
  return(
    <div className="marketScheduleList">
      <h1>Market Schedule</h1>
      <img src="https://images.unsplash.com/photo-1516762167031-bc59fb134985?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9422ca3aeab80bc2c862452aaf9515c8&auto=format&fit=crop&w=800&q=60" />
      <div className="grid-items">
        {marketSchedule.map((date, index) =>
          <MarketSchedule
            day={date.day}
            location={date.location}
            hours={date.hours}
            booth={date.booth}
            key={index}/>
        )}
    </div>

      <style jsx>{`
        img {

          transform: rotate(90deg);
        }
        .marketScheduleList {
          margin:2rem;
        }
        .grid-items {
          display: grid;
        }
      `}</style>

    </div>
  );
}


export default MarketScheduleList;
