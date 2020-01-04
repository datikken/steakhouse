import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
//redux
import store from './store/index';
import { Provider } from 'react-redux';

enableScreens();

async function fetchFonts() {
    await Font.loadAsync({
        'meat': require('./assets/fonts/meat_buckets.ttf')
    });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
      return <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
                onError={err => console.log(err)}
             />
  }

  return (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
      fontFamily: 'meat',
      fontSize: 60,
      padding: 20,
      textAlign: 'center',
      color: 'red'
  }
});