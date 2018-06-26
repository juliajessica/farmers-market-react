import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

  return(
    <div>
      <h1>Mora Mora Farm</h1>
      <div className="nav">
        <h2>
          <Link to="/"
            style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem' }}>Home</Link><Link to="/seasonalproducelist" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem' }}>Seasonal Produce</Link><Link to="/marketschedule" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem' }}>Market Schedule</Link>
        </h2>


      </div>


      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Prata');

        h1 {
          text-align: center;
          color: #416033;
        }

        .nav {
          padding: .7rem;
          margin: .3rem;
          text-transform: uppercase;
        }
        h2 {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 2rem;
          text-decoration: none;
          color: black;
          border: 1px solid black;
        }
        a:hover {
          color:#d7dbe2;
        }
      `}</style>
    </div>

  );
}

export default Nav;
