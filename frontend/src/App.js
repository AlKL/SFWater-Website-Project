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
import yelpIcon from './images/yelp-icon.png';
import googleIcon from './images/google.png';
import yellowPages from './images/yellowPages.png';
import { Button } from 'semantic-ui-react';

const App = () => {
  return (
    <div className='mobile'>


      <div className='mobileButton'>
        <Button primary className='floatingButton' onClick={() => window.location.href = 'tel:416-241-7866'}>Call Now</Button>
        <Button secondary className='floatingButton' a href='#mobileHours'>Hours & Address</Button>
      </div>

      <header>
        <div className='headerWrapper'>
          <div className='bannerContainer'>
            <h1>SPARKLING FRESH WATER</h1>
            <div className='bannerLinks'>
              <a className='underline' href='https://www.google.com/search?q=sparkling%20fresh%20water&rlz=1C5CHFA_enCA904CA904&oq=s&aqs=chrome.2.69i60j69i59l2j69i60l5.1463j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00rUXG5scS4JujNjbBqxGuFc2vUDA:1621203561487&rflfq=1&num=10&rldimm=10018326207811326723&lqi=ChVzcGFya2xpbmcgZnJlc2ggd2F0ZXJaLgoVc3BhcmtsaW5nIGZyZXNoIHdhdGVyIhVzcGFya2xpbmcgZnJlc2ggd2F0ZXKSARZib3R0bGVkX3dhdGVyX3N1cHBsaWVy&ved=2ahUKEwjF9I_znc_wAhVVa80KHWC6BA4QvS4wAHoECAYQNg&rlst=f#rlfi=hd:;si:10018326207811326723,l,ChVzcGFya2xpbmcgZnJlc2ggd2F0ZXJaLgoVc3BhcmtsaW5nIGZyZXNoIHdhdGVyIhVzcGFya2xpbmcgZnJlc2ggd2F0ZXKSARZib3R0bGVkX3dhdGVyX3N1cHBsaWVy;mv:[[43.7833531,-79.4822509],[43.1938171,-79.8986962]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2'><img src={googleIcon}></img></a>
              <a className='underline' href='https://www.yelp.ca/biz/sparkling-fresh-water-north-york'><img src={yelpIcon}></img></a>
              <a className='underline' href='https://www.yellowpages.ca/bus/Ontario/York/Sparkling-Fresh-Water/7785807.html'><img src={yellowPages}></img></a>
            </div>
            <h1 className='mobile-location'>1722 Jane Street</h1>
          </div>
          <div className='contactContainer'>
            <div className='phoneContainer'>
              <h2>
                <Button className='callBtn' onClick={() => window.location.href = 'tel:416-241-7866'}>
                  Call Us: (416) 241-7866
                </Button>
              </h2>
            </div>
          </div>
        </div>
      </header>










      <div className='hero'>
        <div className='hero-wrapper'>
          <div className='hero-about'>
            <h2>Our Water</h2>
            <h3>Local. Affordable. </h3>
            <h3>Water You Can <u>Trust</u>.</h3>
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
            <h3><u>Refills</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$3.50</p>
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
              <p>$10.00</p>
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
              <p>$13.50</p>
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
            <h2>Location</h2>
            <h2><span className='location-span'><u>1722 Jane Street</u> at Jane & Lawrence</span></h2>

            <div className='phone-location-span'>
              <h1>Address</h1>
              <h3>1722 Jane Street @ Jane and Lawrence</h3>
              <h3>North York, M9N 2S3</h3>
            </div>

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
          <h2>Other Products</h2>
          <h2><span className='hover-text underline'>Hover to see the product!</span></h2>
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
          <div className='hours-wrapper' id='mobileHours'>
            <div>
              <h2>Address</h2>
              <p>1722 Jane Street, North York, Ontario, M9N 2S3</p>
              <br></br>
            </div>
            <h2>Hours</h2>

            <div className='div-hours'>
              <div className='left-hours'>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>

              <div className='right-hours'>
                <p>10am - 6pm</p>
                <p>10am - 6pm</p>
                <p>Closed</p>
                <p>10am - 6pm</p>
                <p>10am - 6pm</p>
                <p>10am - 6pm</p>
                <p>11am - 4pm</p>
              </div>
            </div>
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
