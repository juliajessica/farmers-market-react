import React from 'react';
import catherine from '../assets/img/cath.jpg';

function About(){
  return(
    <div className="about">
      <h2>Hi, I am Catherine owner of Mora Mora Farm!</h2>
      <h3 className="tofu">vroom, tofu</h3>
      <div className="flex">
        <img src={catherine} />
        <div className='text'>
          <h3>Vision for the Farm</h3>
          <p>I want to grow food. Really good food</p>
          <p>I want to do it efficiently - not for the sake of profit, but for an increased capacity for generosity. </p>
          <p>I want to create a farm business that can sustain itself financially, is mindful of its impact on the earth, and works to promote a healthy lifestyle balance for its workers.</p>
          <p>I want to share the harvest with the friends around me and allow food to connect people around the city.</p>
          <p>I could go so much farther into this, but trust me, you don't want that. This email would turn into a 300-page book. I imagine you'll see more of the vision unfolding in the coming weeks, months, years. But I'm always down to chat about it if you do want to hear more! </p>
        </div>
      </div>


      <style jsx>{`
        .about {
          margin: 4rem;
        }
        h2 {
          font-size: 3rem;
          color: #aa98aa;
          margin: 1rem;
          text-align: center;
        }
        .tofu {
          position: absolute;
          top: 40rem;
          left: 1.2rem;
          z-index:1;
          color: #f4bc42;
          font-size: 4rem;
        }
        img {
          display:block;
          width:100%;
          height:auto;
          margin:auto;
        }
        .flex{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .text {
          padding-left: 2rem;
        }

        `}</style>
    </div>
  );
}

export default About;
