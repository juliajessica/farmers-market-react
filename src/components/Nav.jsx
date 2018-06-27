import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

  return(
    <div>
      <img src="./img/logo.png" className="logo"/>
      <div className="nav">
        <h4><Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem'}}>Home</Link></h4>
        <h4><Link to="/seasonalproducelist" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem' }}>Seasonal Produce</Link></h4>
        <h4><Link to="/marketschedulelist" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem'}}>Market Schedule</Link></h4>
      </div>


      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Prata');
        .logo {
          display: block;
          height: 140px;
          width: auto;
          margin: auto;
        }
        h1 {
          text-align: center;
          color: #416033;
          font-size: 3em;
        }

        .nav {
          padding: .7rem;
          text-transform: uppercase;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          border: 1px solid black;
          margin: .4rem;
        }
        h4 {
          text-decoration: none;
          color: black;
        }
        a.h4:hover {
          color:#d6b12c;
        }
      `}</style>
    </div>

  );
}

export default Nav;
