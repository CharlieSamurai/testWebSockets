import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from './initState';
import Reducer from './Reducer/Reducer';
import thunk from 'redux-thunk';

const store = createStore(Reducer, initState, composeWithDevTools(applyMiddleware(thunk)));

export default store;