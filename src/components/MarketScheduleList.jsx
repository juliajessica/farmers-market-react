import React from 'react';
import marketSchedule from './ScheduleData';
import MarketSchedule from './MarketSchedule';
import bannerImg from '../assets/img/harvest.jpeg';


function MarketScheduleList(){
  return(
    <div>
      <h1>Market Schedule</h1>
      <div className="marketScheduleList">
        <hr/>
        <img src={bannerImg} />
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
      </div>

      <style jsx>{`
        h1 {
          font-size: 4rem;
          color: #aa98aa;
          margin: 1rem;
        }
        img {
          display:block;
          width:100%;
          height:auto;
          margin:auto;
        }
        .marketScheduleList {
          margin:2rem;
        }
        .grid-items {
          display: grid;
          grid-gap: .8rem;
          grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        }
      `}</style>

    </div>
  );
}


export default MarketScheduleList;
