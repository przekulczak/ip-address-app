import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { ResetCss } from './styleConfig/reset';
import { BasicStyles } from './styleConfig/basic-styles';
import { Dashboard } from './views';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// TO DO FIX TYPE
export const store = createStoreWithMiddleware(reducers as any);

const App = () => {
  return (
    <Provider store={store}>
      <ResetCss />
      <BasicStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route render={() => <Redirect to="/error" />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
