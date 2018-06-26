import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return(
    <div className="marketSchedule">
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>

      <style jsx>{`
        .marketSchedule{
          margin: 2rem;  
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
