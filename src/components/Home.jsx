import React from 'react';

function Home(){
  return(
    <div className="bg-img">
      <h3>grown organic,</h3>
      <h3>grown with love</h3>
      <h5>welcome to Mora Mora farm</h5>
      <p>learn more</p>

      <style jsx>{`
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
          left: 16em;
          z-index: 1;
          color: white;
          font-size:.9rem;
          font-family: 'Prata', serif;
        }

        p {
          position: absolute;
          top: 38rem;
          left: 15em;
          z-index: 1;
          color: #d6b12c;
          border:1px solid #d6b12c;
          padding: 1em;
          padding-left: 5em;
          padding-right: 5em;
          font-size:.9rem;
          font-family: 'Prata', serif;
        }
      `}</style>
    </div>
  );
}

export default Home;
