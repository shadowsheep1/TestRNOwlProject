/**
 * @format
 */

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import Reactotron from 'reactotron-react-native'


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
Reactotron.log('Hello, Rectotron World!')