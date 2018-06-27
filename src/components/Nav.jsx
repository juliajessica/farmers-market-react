import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){

  return(
    <div>
      <img src="./img/logo.png" className="logo"/>
      <div className="nav">
        <p><Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem'}}>Home</Link></p>
        <p><Link to="/seasonalproducelist" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem' }}>Seasonal Produce</Link></p>
        <p><Link to="/marketschedulelist" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem'}}>Market Schedule</Link></p>
        <p><Link to="/about" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', padding: '.7rem'}}>About</Link></p>
      </div>


      <style jsx>{`
        
        .logo {
          display: block;
          height: 100px;
          width: auto;
          margin: auto;
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
        p {
          text-decoration: none;
          color: black;
          font-size: 10px;
        }
        a.p:hover {
          color:#d6b12c;
        }
      `}</style>
    </div>

  );
}

export default Nav;
