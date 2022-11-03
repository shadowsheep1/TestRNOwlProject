import Reactotron, { networking } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
// https://github.com/infinitered/reactotron-react-native/issues/492
// @ts-ignore
import FlipperConnectionManager from 'reactotron-react-native/dist/flipper'

const reactotron = Reactotron
  //.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    //createSocket: path => new FlipperConnectionManager(path),
    //host: "192.168.1.153"
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // add redux support
  .use(networking())
  .connect() // let's connect!

export default reactotron;