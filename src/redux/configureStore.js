import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidData from './Info/CovidInfo';

const rootReducer = combineReducers({
  covidData,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
