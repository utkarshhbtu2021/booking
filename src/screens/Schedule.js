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
  FlatList,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Screens from '../navigations/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SVG_BACK from '../assets/svg/back.svg';
import SVG_MENU from '../assets/svg/Menu.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {HEIGHT, scaleFont, scaleSize} from '../utils/Mixins';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ICONS from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
export default function Schedule(props) {
  const [listData, setListData] = useState([{id: 1, title: 'Monday'}]);
  const [showData, setShowData] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#337ab7'}}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        hidden={false}
      />
      <View
        style={{
          // backgroundColor: '#F7850F',
          // height: scaleSize(90),
          flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingHorizontal: scaleSize(25),
          paddingTop: scaleSize(40),
          paddingBottom: scaleSize(30),
        }}>
        <SVG_BACK onPress={() => props.navigation.goBack()} />

        <Text
          style={{
            fontSize: scaleFont(18),
            color: 'white',
            fontWeight: '500',
            flex: 1,
            textAlign: 'center',
            marginRight: scaleSize(20),
          }}>
          Schedule
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: scaleSize(30),
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: scaleSize(10),
              // borderWidth: 1,
              // borderColor: 'gray',
              backgroundColor: '#337ab7',
              alignItems: 'center',
              paddingHorizontal: scaleSize(10),
              margin: 10,
              borderRadius: 5,
            }}
            onPress={() => props.navigation.navigate(Screens.VISIT)}>
            <FontAwesome5 name={'users'} size={scaleSize(18)} color={'white'} />
            <Text
              style={{
                color: 'white',
                flex: 1,
                marginLeft: scaleSize(10),
                fontSize: scaleFont(15),
                fontWeight: '500',
              }}>
              Open Visits
            </Text>
            <Icon
              name={'chevron-right'}
              size={scaleSize(25)}
              color={'white'}
              // style={{marginRight: scaleSize(10)}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: scaleSize(10),
              // borderWidth: 1,
              // borderColor: 'gray',
              backgroundColor: '#337ab7',
              alignItems: 'center',
              paddingHorizontal: scaleSize(10),
              margin: 10,
              borderRadius: 5,
            }}
            onPress={() => props.navigation.navigate(Screens.CALENDER)}>
            {/* <Icon name={'notes'} size={scaleSize(18)} color={'#666666'} /> */}
            <FontAwesome
              name={'calendar'}
              size={scaleSize(18)}
              color={'white'}
            />
            <Text
              style={{
                color: 'white',
                flex: 1,
                marginLeft: scaleSize(10),
                fontSize: scaleFont(15),
                fontWeight: '500',
              }}>
              Calender
            </Text>
            <Icon
              name={'chevron-right'}
              size={scaleSize(25)}
              color={'white'}
              // style={{marginRight: scaleSize(10)}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
