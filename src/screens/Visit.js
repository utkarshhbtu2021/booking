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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
export default function Visit(props) {
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
          Open Visits
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
            margin: scaleSize(20),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: scaleFont(18),
              color: 'black',
              fontWeight: '500',
            }}>
            Open Visit
          </Text>
          <View
            style={{
              height: scaleSize(30),
              width: scaleSize(30),
              borderRadius: 70,
              backgroundColor: '#337ab7',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: scaleSize(10),
            }}>
            <Text
              style={{
                fontSize: scaleFont(18),
                color: 'white',
                fontWeight: '500',
              }}>
              1
            </Text>
          </View>
        </View>
        <View
          //   onPress={() => {
          //     // refRBSheet.current.close();
          //     props.navigation.navigate(Screens.DETAIL);
          //   }}
          style={{
            // backgroundColor: '#04C9EC0D',
            marginHorizontal: scaleSize(20),
            padding: scaleSize(20),
            borderRadius: scaleSize(10),
            marginBottom: scaleSize(20),
            elevation: 4,
            shadowColor: 'gray',
            // marginTop: index == 0 ? scaleSize(10) : 0,
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: scaleSize(2),
              }}>
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#000000',
                  fontWeight: '500',
                  marginRight: scaleSize(10),
                  // flex: 0.5,
                }}>
                Utkarsh
              </Text>
              {/* <ICONS name={'call'} /> */}
              {/* <Icon name={'call'} size={scaleSize(18)} color={'#337ab7'} />
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#337ab7',
                  fontWeight: '500',
                  // flex: 1,
                }}>
                888866669
              </Text> */}
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginBottom: scaleSize(2),
              }}>
              {/* <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      // flex: 0.5,
                    }}>
                    Meeting Date -{' '}
                  </Text> */}
              <FontAwesome
                name={'calendar'}
                size={scaleSize(15)}
                color={'#666666'}
                style={{marginRight: scaleSize(10)}}
              />
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#666666',
                  fontWeight: '500',
                  // flex: 1,
                }}>
                Friday 20/01/2024
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: scaleSize(2),
              }}>
              <Feather
                name={'clock'}
                size={scaleSize(15)}
                color={'#666666'}
                style={{marginRight: scaleSize(10)}}
              />
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#666666',
                  fontWeight: '500',
                  flex: 1,
                }}>
                8:00PM - 9:00PM
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Client Address -{' '}
                  </Text> */}
              {/* <Icon
                name={'location-on'}
                size={scaleSize(15)}
                color={'#666666'}
                style={{marginRight: scaleSize(10)}}
              /> */}
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: 'gray',
                  fontWeight: '500',
                  flex: 1,
                  fontStyle: 'italic',
                }}>
                Forest Hills South Side 440018
              </Text>
              <FontAwesome6
                name={'map-location-dot'}
                size={scaleSize(15)}
                color={'#337ab7'}
                style={{marginRight: scaleSize(10)}}
              />
              <Text
                style={{
                  fontSize: scaleFont(14),
                  color: '#337ab7',
                  fontWeight: '500',
                  flex: 1,
                  // fontStyle: 'italic',
                }}>
                OPEN IN MAPS
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: scaleSize(5),
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign
                  name={'like1'}
                  size={scaleSize(15)}
                  color={'#337ab7'}
                  style={{marginRight: scaleSize(5)}}
                />
                <Text
                  style={{
                    fontSize: scaleFont(14),
                    color: '#337ab7',
                    fontWeight: '500',
                    //   flex: 1,
                  }}>
                  Request
                </Text>
              </View>
              <View style={{width: 1, backgroundColor: 'gray'}} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AntDesign
                  name={'dislike1'}
                  size={scaleSize(15)}
                  color={'#337ab7'}
                  style={{marginRight: scaleSize(5)}}
                />
                <Text
                  style={{
                    fontSize: scaleFont(14),
                    color: '#337ab7',
                    fontWeight: '500',
                    //   flex: 1,
                  }}>
                  Decline
                </Text>
              </View>
              <View style={{width: 1, backgroundColor: 'gray'}} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ICONS
                  name={'eye-off'}
                  size={scaleSize(15)}
                  color={'#337ab7'}
                  style={{marginRight: scaleSize(5)}}
                />
                <Text
                  style={{
                    fontSize: scaleFont(14),
                    color: '#337ab7',
                    fontWeight: '500',
                    //   flex: 1,
                  }}>
                  Dismiss
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
