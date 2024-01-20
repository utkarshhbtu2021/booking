import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {scaleFont, scaleSize} from '../utils/Mixins';
import Screens from '../navigations/Screens';

const CustomDrawer = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#337ab7',
        paddingHorizontal: scaleSize(20),
        paddingTop: scaleSize(30),
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/image/profile1.png')}
        style={{alignSelf: 'center'}}
      />
      <TouchableOpacity
        style={{width: '90%', alignItems: 'center'}}
        onPress={() => props.navigation.closeDrawer()}>
        <Text
          style={{
            fontSize: scaleFont(16),
            color: '#FFFFFF',
            fontWeight: '500',
            marginVertical: scaleSize(15),
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <View style={{height: 1, backgroundColor: '#ffffff', width: '90%'}} />
      <TouchableOpacity
        style={{width: '90%', alignItems: 'center'}}
        onPress={() => props.navigation.navigate(Screens.SCHEDULE)}>
        <Text
          style={{
            fontSize: scaleFont(16),
            color: '#FFFFFF',
            fontWeight: '500',
            marginVertical: scaleSize(15),
          }}>
          Schedule
        </Text>
      </TouchableOpacity>
      <View style={{height: 1, backgroundColor: '#ffffff', width: '90%'}} />
      <TouchableOpacity
        style={{width: '90%', alignItems: 'center'}}
        onPress={() => props.navigation.navigate(Screens.MY_PROGILE)}>
        <Text
          style={{
            fontSize: scaleFont(16),
            color: '#FFFFFF',
            fontWeight: '500',
            marginVertical: scaleSize(15),
          }}>
          Profile
        </Text>
      </TouchableOpacity>
      <View style={{height: 1, backgroundColor: '#ffffff', width: '90%'}} />
      <TouchableOpacity
        style={{width: '90%', alignItems: 'center'}}
        onPress={() => Alert.alert('Do you want to Logout?')}>
        <Text
          style={{
            fontSize: scaleFont(16),
            color: '#FFFFFF',
            fontWeight: '500',
            marginVertical: scaleSize(15),
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
