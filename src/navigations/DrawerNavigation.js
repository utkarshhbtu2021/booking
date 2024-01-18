import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import SCREENS from './Screens';
import CustomDrawer from '../Components/CustomDrawer';
import Dashboard from '../screens/Dashboard';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.DASHBOARD}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          width: '65%',
        },
      }}
      drawerContent={({navigation}) => {
        return <CustomDrawer navigation={navigation} />;
      }}>
      {/* <Drawer.Screen name={SCREENS.HOME} component={Home} /> */}
      <Drawer.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
    </Drawer.Navigator>
  );
}
