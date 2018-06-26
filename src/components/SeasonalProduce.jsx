import React from 'react';
import PropTypes from 'prop-types';

function SeasonalProduce(props){
  return (
    <div className="seasonalProduce">
      <p>{props.month}</p>
      <ul>
        {props.selection.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>

      <style jsx>{`
        .seasonalProduce {
          margin: 2rem;
          border: 1px solid black;
          padding: 1rem;
          align-items:center;
        }
        p {
          text-align:center;
          color: #967d54;
          font-size: 2.5rem;
        }
        li {
          list-style-type: none;
          font-size: 1.3rem;
        }
      `}</style>
    </div>

  );
}


SeasonalProduce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};


export default SeasonalProduce;



// {masterTicketList.map((ticket, index) => <Ticket
//   names={ticket.names}
//   location={ticket.location}
//   issue={ticket.issue}
//   key={index} />
// )}
