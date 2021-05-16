import React from 'react';
import AddComment from './components/AddCommentModal/CommentIndex';
import yBottle from './images/yBottle.png';
import MapComponent from './components/MapComponent';
import cooler from './images/cooler.png';
import refill from './images/refill.png';
import waterDrop from './images/water-drop.png';
import pumpDiagonal from './images/pumpDiagonal.jpg';
import pumpBack from './images/pumpBack.jpg';
import cupsDiagonal from './images/cupsDiagonal.jpg';
import cupsBack from './images/cupsBack.jpg';
import dispenserDiagonal from './images/dispenserDiagonal.jpg';
import dispenserBack from './images/dispenserBack.jpg';
import FlipCard from './components/FlipCard/FlipCard';
// import tele from './images/telephone.svg';

const App = () => {
  return (
    <div>
      <header>
        <div className='headerWrapper'>
          <div className='bannerContainer'>
            <h1>SPARKLING FRESH WATER</h1>
            <h1 className='mobile-location'>1722 Jane Street</h1>
          </div>
          <div className='contactContainer'>
            <div className='phoneContainer'>
              <h2 className='underline'><a href="tel:416-241-7866">Call: (416) 241-7866</a></h2>
            </div>
          </div>
        </div>
      </header>

      <div className='hero'>
        <div className='hero-wrapper'>
          <div className='hero-about'>
            <h2>Our Water</h2>
            <h3>Local. Affordable. Water You Can <u>Trust</u>.</h3>
            <p><i>Pure drinking water filtered by reverse osmosis</i></p>
            <p><i>Total dissolved solids less than 10 parts per million</i></p>
          </div>
          <div className='bottle-container'>
            <img src={cooler} alt='Splash of water' />
          </div>
        </div>
      </div>

      <div className='prices'>
        <div className='price-container'>
          <div className='price-title'>
            <h3><u>Refill</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$3.5</p>
            </div>
            <div className='price-desc-img refill'>
              <img src={waterDrop} alt='Water droplets' />
            </div>
          </div>
        </div>
        <div className='price-container'>
          <div className='price-title'>
            <h3><u>Empty Bottle</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$10</p>
            </div>
            <div className='price-desc-img emptyBottle' >
              <img src={yBottle} alt='5 gallon water bottle' />
            </div>
          </div>
        </div>
        <div className='price-container'>
          <div className='price-title'>
            <h3><u>Bottle & Water</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$13.5</p>
            </div>
            <div className='price-desc-img bottleWater'>
              <img src={refill} alt='refill icon' />
            </div>
          </div>
        </div>
      </div>

      <div className='location'>
        <div className='location-head'>
          <div className='location-wrapper'>
            <h2>Where Are We Located?</h2>
            <h2><span className='location-span'><u>1722 Jane Street</u> at Jane & Lawrence</span></h2>
          </div>
        </div>
        <div className='location-map'>
          <div className='location-wrapper map-wrapper'>
            <div className='map-container'>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>

      <div className='other-products'>
        <div className='other-wrapper'>
          <h2>Our Other Products - <span className='underline'>Click to flip!</span></h2>
        </div>
        <div className='product-list'>
          <div className='product-card'>
            <FlipCard
              image={pumpDiagonal}
              backImage={pumpBack}
              desc='Drinking Water Pump'
              price='$16' />
          </div>
          <div className='product-card'>
            <FlipCard
              image={cupsDiagonal}
              backImage={cupsBack}
              desc='Cone Water Cups'
              price='$7' />
          </div>
          <div className='product-card product-card-3'>
            <FlipCard
              image={dispenserDiagonal}
              backImage={dispenserBack}
              desc='Water Cooler Cup Dispenser'
              price='$28' />
          </div>
        </div>
      </div>

      <footer>
        <div className='footer-wrapper'>
          <div>
            <h2>When Are We Open?</h2>
            <p>Wednesday: <u>Closed</u> </p>
            <p>Monday, Tuesday, Thursday, Friday, Saturday: <u>10am - 6pm</u></p>
            <p>Sunday: <u>11am - 4pm</u></p>
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
