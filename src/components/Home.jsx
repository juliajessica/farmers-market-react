import React from 'react';

function Home(){
  return(
    <div className="bg-img">
      <h3>grown organic, grown with love</h3>


      <style jsx>{`
        .bg-img {
          background-image: url('https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b23b9e5ab26314eb5d94786014f589e&auto=format&fit=crop&w=634&q=80');
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 700px;
        }

        h3 {
          position: absolute;
          top: 30rem;
          left: .4em;
          z-index: 1;
          color: white;
          font-size:4rem;
          font-family: 'Prata', serif;
        }
      `}</style>
    </div>
  );
}

export default Home;
