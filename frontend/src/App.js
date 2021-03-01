import React from 'react';
// import Frontpage from './components/Frontpage';
import AddComment from './components/AddCommentModal/CommentIndex';
import xBanner from './images/xBanner.png';
import xBottle from './images/xBottle.png';
// import xMap from './images/xMap.png';
import MapComponent from './components/MapComponent';

const App = () => {
  return (
    <div className='all'>
      <div className='wrapper'>
        <header>
          <div className='bannerContainer'>
            <img src={xBanner} className='bannerImage' />
          </div>
          <div className='contactContainer'>
            <p>Phone: (416) 241-7866</p>
            <AddComment />
          </div>
        </header>

        <section>
          <div className='sectionContainer'>
            <div className='bottleContainer'>
              <img src={xBottle} className='bottleImage' />
            </div>
            <div className='bottleText'>
              <p>New bottle: $10</p>
              <p>New filled bottle: $13.5</p>
              <p>Refill: $3.5</p>
            </div>
          </div>
          <div className='sectionContainer2'>
            <div className='mapContainer'>
              {/* <img src={xMap} className='mapImage' /> */}
              <MapComponent />
            </div>
            <div className='mapText'>
              <p>1722 Jane Street</p>
              <p>@ Jane & Lawrence</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className='hoursOfOperation'>
          <div className='hoursSpan'>
            <p>Hours of operation:</p>
          </div>
          <p>Wednesday: Closed </p>
          <p>Monday, Tuesday, Thursday, Friday, Saturday: 10am - 6pm</p>
          <p>Sunday: 11am - 4pm</p>
        </div>
      </footer>
    </div>

  );
};

export default App;
