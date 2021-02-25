import React from 'react';
import Frontpage from './components/Frontpage';
import AddComment from './components/AddCommentModal/CommentIndex';

const App = () => {
  return (
    <div>
      <Frontpage />
      <AddComment />
    </div>
  );
};

export default App;