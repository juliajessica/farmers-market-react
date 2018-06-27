import React from 'react';
import catherine from '../assets/img/cath.jpg';

function About(){
  return(
    <div className="about">
      <h2>Hi, I am Catherine owner of Mora Mora Farm!</h2>
      <h3>this is tofu</h3>
      <img src={catherine} />
      <h3>Vision for the Farm</h3>
      <p>I want to grow food. Really good food</p>

      <p>I want to do it efficiently - not for the sake of profit, but for an increased capacity for generosity. </p>

      <p>I want to create a farm business that can sustain itself financially, is mindful of its impact on the earth, and works to promote a healthy lifestyle balance for its workers.</p>

      <p>I want to share the harvest with the friends around me and allow food to connect people around the city.</p>

      <p>I could go so much farther into this, but trust me, you don't want that. This email would turn into a 300-page book. I imagine you'll see more of the vision unfolding in the coming weeks, months, years. But I'm always down to chat about it if you do want to hear more! </p>


      <style jsx>{`
        .about {
          margin: 2rem;
        }
        h1 {
          font-size: 4rem;
          color: #aa98aa;
          margin: 1rem;
          text-align: center;
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
