import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return(
    <div className="bg-img">
      <h3>grown organic,</h3>
      <h3>grown with love</h3>
      <h5>welcome to Mora Mora farm</h5>
      <Link to="/about"><p>learn more</p></Link>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Prata');
        .bg-img {
          background-image: url('https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b23b9e5ab26314eb5d94786014f589e&auto=format&fit=crop&w=634&q=80');
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 700px;
        }

        h3:nth-child(1) {
          position: absolute;
          top: 19rem;
          left: .4em;
          z-index: 1;
          color: white;
          font-size:4rem;
          font-family: 'Prata', serif;
        }

        h3:nth-child(2) {
          position: absolute;
          top: 23rem;
          left: .78em;
          z-index: 1;
          color: white;
          font-size:4rem;
          font-family: 'Prata', serif;
        }

        h5 {
          position: absolute;
          top: 35rem;
          left: 12em;
          z-index: 1;
          color: white;
          font-size:.9rem;
          font-family: 'Prata', serif;
        }

        p {
          position: absolute;
          top: 38rem;
          left: 10em;
          z-index: 1;
          color: #d6b12c;
          border:1px solid #d6b12c;
          padding: 1em;
          padding-left: 7em;
          padding-right: 7em;
          font-size:.9rem;
          font-family: 'Prata', serif;
        }
        p:hover{
          color: white;
          border:1px solid white;
        }

        @media (max-width: 545px){
          h3:nth-Child(1){
            font-size: 3.2rem;
            top: 19rem;
            left: .5rem;
          }
          h3:nth-Child(2){
            font-size: 3.2rem;
            top: 23rem;
            left: 3.5rem;
          }
          p{
            top: 38rem;
            left: 2rem;
          }
          h5 {
            top: 35rem;
            left: 5rem;
          }

        }
      `}</style>
    </div>
  );
}

export default Home;
