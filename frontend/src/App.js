import React from 'react';
// import Frontpage from './components/Frontpage';
import AddComment from './components/AddCommentModal/CommentIndex';
// import xBanner from './images/xBanner.png';
// import xBottle from './images/xBottle.png';
import yBottle from './images/yBottle.png';
// import xMap from './images/xMap.png';
import MapComponent from './components/MapComponent';
// import ModalIndex from './components/NewCommentModal/ModalIndex';

const App = () => {
  return (
    <div>
      <header>
        <div className='headerWrapper'>
          <div className='bannerContainer'>
            {/* <img src={xBanner} className='bannerImage' /> */}
            <h1>SPARKLING FRESH WATER</h1>
          </div>
          <div className='contactContainer'>
            <div className='phoneContainer'>
              <h2>Call Us: (416) 241-7866</h2>
            </div>
            {/* <AddComment /> */}
            {/* <ModalIndex /> */}
          </div>
        </div>
      </header>

      <div className='hero'>
        <div className='hero-wrapper'>
          <div className='hero-prices'>
            <h2>Water & Bottle Prices</h2>
            <div className='price-separator'>
              <div className='price-description'>
                <p>New bottle</p>
                <p>New filled bottle</p>
                <p>Refill</p>
              </div>
              <div className='price-number'>
                <p>$10</p>
                <p>$13.50</p>
                <p>$3.50</p>
              </div>
            </div>
          </div>
          <div className='bottle-container'>
            <img src={yBottle} />
          </div>
        </div>
      </div>

      <div className='prices'>
        <div className='price-container'>

        </div>
        <div className='price-container'>

        </div>
        <div className='price-container'>

        </div>
      </div>

      <div className='location'>
        <div className='location-wrapper'>
          <h2>Where Are We Located?</h2>
        </div>
        <div className='location-map'>
          <div className='location-wrapper map-wrapper'>
            <div className='map-container'>
              <MapComponent />
            </div>
            <div className='location-desc'>
              <h2>1722 Jane Street</h2>
              <h3>North York, Ontario</h3>
            </div>

          </div>
        </div>
      </div>

      <div className='other-products'>
        <div className='other-wrapper'>
          <h2>Other Products</h2>
        </div>
        <div className='product-list'>

        </div>
      </div>

      <footer>
        <div className='footer-wrapper'>
          <div>
            <h2>When Are We Open?</h2>
            <p>Wednesday: Closed </p>
            <p>Monday, Tuesday, Thursday, Friday, Saturday: 10am - 6pm</p>
            <p>Sunday: 11am - 4pm</p>
          </div>
          <div className='email-btn'>
            <AddComment />
          </div>
        </div>
      </footer>
    </div>

  );
};

export default App;
