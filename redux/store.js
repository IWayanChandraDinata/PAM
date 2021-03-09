import {createStore} from 'redux';
import {counterTinggi} from './reducer';
const store = createStore(counterTinggi);
export default store;