import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { ResetCss } from './styleConfig/reset';
import { BasicStyles } from './styleConfig/basic-styles';
import { Dashboard } from './views';
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// export const store = createStoreWithMiddleware(reducers);

const App = () => {
  return (
    <>
      <ResetCss />
      <BasicStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route render={() => <Redirect to="/error" />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
