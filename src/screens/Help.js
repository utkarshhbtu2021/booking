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

export default function Help(props) {
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
          Help
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
            // backgroundColor: '#04C9EC0D',
            elevation: 2,
            // marginBottom: 20,
            margin: scaleSize(20),
            padding: scaleSize(20),
            borderRadius: scaleSize(10),
          }}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: 'black',
              fontWeight: '500',
            }}>
            Question?
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: 'black',
              fontWeight: '500',
            }}>
            Contact E & S Home care Solution , LLC
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: 'black',
                fontWeight: '500',
              }}>
              Phone -
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#959595',
                  fontWeight: '500',
                }}>
                {' '}
                759494999
              </Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: 'black',
                fontWeight: '500',
              }}>
              E-mail -
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#959595',
                  fontWeight: '500',
                }}>
                {' '}
                UtkarshSingh@gmail.com
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: '#04C9EC0D',
            marginHorizontal: scaleSize(20),
            padding: scaleSize(20),
            borderRadius: scaleSize(10),
            elevation: 2,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#cd677d',
              fontWeight: '500',
            }}>
            Overdue Compilance Warning
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#959595',
              fontWeight: '500',
            }}>
            You have overdue compilance items
          </Text>
          <View style={{marginTop: scaleSize(10), marginLeft: scaleSize(10)}}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#cd677d',
                fontWeight: '500',
              }}>
              Outstanding Compilance Count : 7
            </Text>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#83cac9',
                fontWeight: '500',
                marginTop: scaleSize(5),
              }}>
              Completed Compilance Count : 3
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
