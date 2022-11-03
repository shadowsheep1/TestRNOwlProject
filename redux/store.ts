import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import CountReducer from './reducers/countReducer';
import Reactotron from '../ReactotronConfig';

const rootReducer = combineReducers({
    count: CountReducer,
});

const middlewares = [
    /* other middlewares */
];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
    Reactotron.log?.("redux-flipper debugger middelware created")
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const reactotronEnhancers = Reactotron.createEnhancer?.() 
var composedEnhancers = middlewareEnhancer
if (reactotronEnhancers != undefined) {
    composedEnhancers = compose(composedEnhancers, reactotronEnhancers);
    Reactotron.log?.(composedEnhancers)
} 

// - https://github.com/jk-gan/flipper-plugin-redux-debugger/issues/10
// - https://github.com/jk-gan/redux-flipper
// - https://fbflipper.com/docs/features/react-native/#community-react-native-plugins-for-flipper

export const store = createStore(
    rootReducer,
    composedEnhancers
);