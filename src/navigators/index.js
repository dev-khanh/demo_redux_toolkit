// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectRedux from '../screen/connect_redux';
import TextFetchApi from '../screen/test_fetch_api';

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ConnectRedux} />
        <Stack.Screen name="Test" component={TextFetchApi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
