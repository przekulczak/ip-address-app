import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import reducers from './reducers';
import { ResetCss } from './styleConfig/reset';
import { BasicStyles } from './styleConfig/basic-styles';
import { Dashboard, Error } from './views';

export const history = createBrowserHistory({ basename: '/' });

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// TO DO FIX TYPE
export const store = createStoreWithMiddleware(reducers as any);

const App = () => {
  return (
    <Provider store={store}>
      <ResetCss />
      <BasicStyles />
      <Router history={history}>
        <Switch>
          <Route exact path="/error" component={Error} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
