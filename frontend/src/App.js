import React from 'react';
import Frontpage from './components/Frontpage';
import NotFound from './components/NotFound';
import AddComment from './components/AddCommentModal/CommentIndex';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Frontpage />
          <AddComment />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;