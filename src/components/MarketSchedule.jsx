import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return(
    <div className="marketSchedule">
      <p className="day">{props.day}</p>
      <p><strong>Location:</strong> {props.location}</p>
      <p><strong>Hours:</strong> {props.hours}</p>
      <p><strong>Booth:</strong> {props.booth}</p>

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
