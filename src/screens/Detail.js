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
import React, {useState} from 'react';
import Screens from '../navigations/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SVG_BACK from '../assets/svg/back.svg';
import SVG_MENU from '../assets/svg/Menu.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';

export default function Detail(props) {
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
          Detail
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
          paddingHorizontal: scaleSize(25),
        }}>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 20}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Meeting Date
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            09, January 24
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Shift Time
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            8:00 PM - 9:00 PM
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Client Name
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            raghavClient@mahajan
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Phone Number
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            7044695008
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Client Diagnosis
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            A1781
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Client Care Plans
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            Bed Bath, Shower, Skin Care, Transfers: Mechanical/Hoyer Lift,
            Ambulation/Assist w/Walking
          </Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Client Address
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            Paper Birch Drive 10101 Charlotte NC US 28215
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 5,
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
              flex: 0.5,
            }}>
            Time now at client's location
          </Text>
          <Text
            style={{
              flex: 0.1,
              fontSize: scaleFont(14),
              color: '#000000',
              fontWeight: '500',
            }}>
            -
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: '#666666',
              fontWeight: '500',
              flex: 1,
            }}>
            09:12:23PM
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: scaleSize(30),
          }}>
          <TouchableOpacity
            style={{
              flex: 0.4,
              backgroundColor: '#337ab7',
              alignItems: 'center',
              paddingVertical: scaleSize(10),
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#FFFFFF',
                fontWeight: '500',
              }}>
              Clock In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.4,
              backgroundColor: '#337ab7',
              alignItems: 'center',
              paddingVertical: scaleSize(10),
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#FFFFFF',
                fontWeight: '500',
              }}>
              Clock Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
