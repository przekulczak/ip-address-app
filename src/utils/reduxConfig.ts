import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session';
import reducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history'],
};
const presistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(presistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { persistor, store };
