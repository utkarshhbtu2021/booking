import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import * as React from 'react';
import SCREENS from './Screens';
import {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
// import DrawerNavigation from "./DrawerNavigation";
import Myprofile from '../screens/Myprofile';
import Detail from '../screens/Detail';
import DrawerNavigation from './DrawerNavigation';
import Schedule from '../screens/Schedule';
import Dashboard from '../screens/Dashboard';
import Help from '../screens/Help';
import Calender from '../screens/Calender';
import Visit from '../screens/Visit';
const openConfig = {
  animation: 'timing',
  config: {
    stiffness: 2000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.SPLASH}
        screenOptions={{
          gestureDirection: 'horizontal',
          headerShown: false,
          transitionSpec: {
            open: openConfig,
            close: openConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}>
        <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.SCHEDULE} component={Schedule} />
        <Stack.Screen name={SCREENS.MY_PROGILE} component={Myprofile} />
        <Stack.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
        {/* <Stack.Screen name={SCREENS.DRAWER} component={DrawerNavigation} /> */}
        <Stack.Screen name={SCREENS.HELP} component={Help} />
        <Stack.Screen name={SCREENS.CALENDER} component={Calender} />
        <Stack.Screen name={SCREENS.VISIT} component={Visit} />
        <Stack.Screen name={SCREENS.DETAIL} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
