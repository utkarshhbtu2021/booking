import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Screens from '../navigations/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SVG_ICON from '../assets/svg/icon.svg';
import SVG_LOCK from '../assets/svg/lock.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(Screens.LOGIN);
    }, 2500);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <Image
        source={require('../assets/image/logo.png')}
        style={{
          height: scaleSize(90),
          width: scaleSize(250),
          // marginTop: scaleSize(80),
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
