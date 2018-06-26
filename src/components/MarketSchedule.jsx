import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return(
    <div className="marketSchedule">
      <p className="day">{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>

      <style jsx>{`

        .marketSchedule{
          margin: 2rem;
        }

        .day {
          text-align:center;
          color: #967d54;
          font-size: 2.5rem;
        }



        `}
      </style>
    </div>
  );
}

MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default MarketSchedule;
