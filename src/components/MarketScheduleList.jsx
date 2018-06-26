import React from 'react';
import marketSchedule from './ScheduleData';
import MarketSchedule from './MarketSchedule';


function MarketScheduleList(){
  return(
    <div className="marketScheduleList">
      <h1>Market Schedule</h1>
      <hr/>
      <img src="https://images.unsplash.com/photo-1504283846145-580314790011?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3aa5fdc890faba58f005e28b51f4e349&auto=format&fit=crop&w=800&q=60" />
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
        h1 {
          font-size: 4rem;
          color: #aa98aa;
          margin: 1rem;
        }
        img {

        }
        .marketScheduleList {
          margin:2rem;
        }
        .grid-items {
          display: grid;
          grid-gap: .7rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
      `}</style>

    </div>
  );
}


export default MarketScheduleList;
