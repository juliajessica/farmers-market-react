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
        <p className="imgText">grow</p>
        <p>slowly, slowly</p>
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
        .marketScheduleList {
          margin:4rem;
        }
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
        .grid-items {
          display: grid;
          grid-gap: .8rem;
          grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        }
        .imgText {
          position: absolute;
          top: 24rem;
          left: 1rem;
          z-index: 1;
          color:#d6b12c;
          font-size: 9rem;
        }
        p{
          position: absolute;
          top: 40rem;
          left: 1.5rem;
          z-index: 1;
          color:#d6b12c;
          font-size: 3rem;
        }
        @media (max-width:550px){
          .marketScheduleList {
            margin:.3rem;
          }
          .imgText {
            top: 24rem;
            left: 1rem;
            font-size: 7rem;
          }
          p{
            top: 37rem;
            left: 1.5rem;
            font-size: 2rem;
          }
        }
      `}</style>

    </div>
  );
}


export default MarketScheduleList;
