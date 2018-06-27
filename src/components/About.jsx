import React from 'react';
import catherine from '../assets/img/cath.jpg';

function About(){
  return(
    <div>
      <h2>Hi, I am Catherine owner of Mora Mora Farm!</h2>
      <img src={catherine} />


      <style jsx>{`
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

        `}</style>
    </div>
  );
}

export default About;
