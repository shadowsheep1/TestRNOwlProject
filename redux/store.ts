import { createStore, combineReducers } from 'redux';
import CountReducer from './reducers/countReducer';
import Reactotron from '../ReactotronConfig';

const rootReducer = combineReducers({
    count: CountReducer,
});

export const store = createStore(
    rootReducer,
    Reactotron.createEnhancer()
);