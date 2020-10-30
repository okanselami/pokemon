import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/Home'));
const Detail = React.lazy(() => import('./containers/Detail'));

function App() {
  return (
    <div className="layout">
      <Router>
        <React.Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/pokemon/:name" component={Detail} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>

  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
