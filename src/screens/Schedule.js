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
} from 'react-native';
import React, {useState} from 'react';
import Screens from '../navigations/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SVG_BACK from '../assets/svg/back.svg';
import SVG_MENU from '../assets/svg/Menu.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';

export default function Schedule(props) {
  const [listData, setListData] = useState([
    {id: 1, title: 'Monday'},
    {id: 2, title: 'Tuesday'},
    {id: 3, title: 'Wednesday'},
    {id: 4, title: 'Thursday'},
  ]);
  const renderItem = ({item}) => {
    return (
      <View style={{marginTop: scaleSize(10)}}>
        <Text style={{color: '#e67273', fontWeight: '700'}}>
          {item.title} - 24/01/2024
        </Text>
        <View
          style={{
            backgroundColor: '#04C9EC0D',
            padding: scaleSize(20),
            marginVertical: scaleSize(10),
            // flex: 0.4,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: '500'}}>
            12:45PM-20:45PM
          </Text>
          <Text style={{color: 'black', fontWeight: '500'}}>Private pay</Text>
          <Text style={{color: 'black', fontWeight: '500'}}>SingIn-1:00Am</Text>
          <Text style={{color: 'black', fontWeight: '500'}}>
            SingOut-2:00Am
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#04C9EC0D',
            padding: scaleSize(20),
            marginVertical: scaleSize(10),
            // flex: 0.4,
            alignItems: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: '500'}}>
            12:45PM-20:45PM
          </Text>
          <Text style={{color: 'black', fontWeight: '500'}}>Private pay</Text>
          <Text style={{color: 'black', fontWeight: '500'}}>SingIn-1:00Am</Text>
          <Text style={{color: 'black', fontWeight: '500'}}>
            SingOut-2:00Am
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F7850F'}}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: scaleSize(25),
          paddingTop: scaleSize(40),
          paddingBottom: scaleSize(20),
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
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
          paddingHorizontal: scaleSize(25),
        }}
        data={listData}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
