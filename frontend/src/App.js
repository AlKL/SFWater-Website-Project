import React from 'react';
// import Frontpage from './components/Frontpage';
import AddComment from './components/AddCommentModal/CommentIndex';
import xBanner from './images/xBanner.png';

const App = () => {
  return (
    <div className='wrapper'>



      <header>
        <div className='bannerContainer'>
          <img src={xBanner} className='banner' />
        </div>
        <div className='contactContainer'>
          <p>Phone: (416) 241-7866</p>
          <AddComment />
        </div>
      </header>

      <section>
        <div className='pricesContainer'>
          <p>New bottle: $13</p>
          <p>Refill: $3</p>
        </div>
        <div className='mapContainer'>
          <p>Map here</p>
          <p>1722 Jane Street</p>
          <p>Closest intersection: Jane & Lawrence</p>
        </div>
      </section>

    </div>
  );
};

export default App;
