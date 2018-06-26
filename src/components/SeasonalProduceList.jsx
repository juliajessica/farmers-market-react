import React from 'react';
import availableProduce from './ProduceData';
import SeasonalProduce from './SeasonalProduce';

function SeasonalProduceList(){
  return(
    <div className="seasonalProduceList">
      <h1>Seasonal Produce</h1>
      <hr/>
      <div className='flexItems'>
        {availableProduce.map((produce, index) =>
          <SeasonalProduce
            month={produce.month}
            selection={produce.selection}
            key={index}/>
        )}
      </div>
      <style jsx>{`
        h1 {
          font-size: 4rem;
          color: #aa98aa;
          margin: 1rem;
        }
        .flexItems {
          display: grid;
          grid-gap: .7rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
      `}</style>
    </div>

  );


}

export default SeasonalProduceList;
