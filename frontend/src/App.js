import React from 'react';
import Frontpage from './components/Frontpage';
import AddComment from './components/AddCommentModal/CommentIndex';
import xBanner from './images/xBanner.png';

const App = () => {
  return (
    <div>
      <div className="bannerContainer">
        <img src={xBanner} className='banner' />
      </div>




      <Frontpage />
      <AddComment />
    </div>
  );
};

export default App;