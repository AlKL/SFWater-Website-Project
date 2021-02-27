import React from 'react';
import Frontpage from './components/Frontpage';
import NotFound from './components/NotFound';
import AddComment from './components/AddCommentModal/CommentIndex';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/notfound">
          <NotFound />
        </Route> */}

        <Route path='/'>
          <Frontpage />
          <AddComment />
        </Route>

        <Route path="/notfound" component={NotFound} status={404} />

      </Switch>
    </div>
  );
};

export default App;