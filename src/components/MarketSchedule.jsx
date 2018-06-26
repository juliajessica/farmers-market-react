import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return(
    <div>
      <p></p>
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
