/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState, type PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reactotron from 'reactotron-react-native'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { decrement, increment } from './redux/actions/counterAction';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);
  const handleIncreament = () => {
    dispatch(increment());
  };

  const handleDecreament = () => {
    dispatch(decrement());
  };

  const fetchRequest = () => {
    fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((json) => {
        reactotronLog?.(json)
      })
      .catch((error) => {
        console.error(error);
      });;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Test HTTP Request"
          onPress={fetchRequest}
          testID="httpButton"
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
          testID="button"
        />
        <Text style={styles.title_text}>Counter App</Text>
        <Text style={styles.counter_text} testID="counter">{count}</Text>
        <Pressable testID="incrementButton"
          onPress={handleIncreament}
          style={styles.btn}>
          <Text style={styles.btn_text}> Increment </Text>
        </Pressable>

        <Pressable testID="decrementButton"
          onPress={handleDecreament}
          style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
          <Text style={styles.btn_text}> Decrement </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const reactotronLog = Reactotron.log;
const reactotronWarn = Reactotron.warn;
const reactotronError = Reactotron.error;

function App() {
  useEffect(() => {
    // https://bobbyhadz.com/blog/typescript-cannot-invoke-an-object-which-is-possibly-undefined#:~:text=The%20error%20%22Cannot%20invoke%20an,(%3F.)%2C%20e.g.%20employee.
    reactotronLog?.('Rendering App Component!');
    reactotronLog?.({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } });
    reactotronWarn?.('*glares*');
    reactotronError?.('Now you have done it!', null);
    Reactotron.display({
      name: 'KNOCK KNOCK',
      preview: 'Who\'s there?',
      value: 'Orange.'
    })
    
    Reactotron.display({
      name: 'ORANGE',
      preview: 'Who?',
      value: 'Orange you glad you don\'t know me in real life?',
      important: true
    })
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
