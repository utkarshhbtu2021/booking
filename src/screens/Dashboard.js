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
import React, {useRef, useState} from 'react';
import Screens from '../navigations/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SVG_BACK from '../assets/svg/back.svg';
import SVG_MENU from '../assets/svg/Menu.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';
import FilterListBottomSheet from '../Components/FilterListBottomSheet';

export default function Dashboard(props) {
  const [showData, setShowData] = useState(false);
  const bottomSheet = useRef();

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
          // backgroundColor: '#F7850F',
          // height: scaleSize(90),
          flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingHorizontal: scaleSize(25),
          paddingTop: scaleSize(40),
          paddingBottom: scaleSize(20),
        }}>
        <SVG_MENU
          onPress={() =>
            // props.navigation.navigate(Screens.MY_PROGILE)
            props.navigation.openDrawer()
          }
        />

        <Text
          style={{
            fontSize: scaleFont(18),
            color: 'white',
            fontWeight: '500',
            flex: 1,
            textAlign: 'center',
            marginRight: scaleSize(20),
          }}>
          Dashboard
        </Text>
      </View>
      <Text
        style={{
          fontSize: scaleFont(18),
          color: 'white',
          fontWeight: '500',
          // flex: 1,
          // textAlign: 'center',
          marginLeft: scaleSize(25),
          marginBottom: scaleSize(20),
        }}>
        Welcome, Utkarsh Singh
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
        }}>
        <View
          style={{
            backgroundColor: '#04C9EC0D',
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
            backgroundColor: '#04C9EC0D',
            marginHorizontal: scaleSize(20),
            padding: scaleSize(20),
            borderRadius: scaleSize(10),
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
        <Text
          style={{
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(20),
            fontSize: scaleFont(15),
            color: 'black',
            fontWeight: '700',
          }}>
          Kindly use below filters to fetch meetings based on your preferred
          criteria.
        </Text>
        <View
          style={{
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: 'black',
                fontWeight: '500',
                // backgroundColor: 'red',
              }}>
              *From{' '}
            </Text>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#959595',
                fontWeight: '500',
                // marginTop: scaleSize(10),
                textDecorationLine: 'underline',
              }}>
              22/11/2023
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: 'black',
                fontWeight: '500',
                // backgroundColor: 'red',
              }}>
              *To
            </Text>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#959595',
                fontWeight: '500',
                // marginTop: scaleSize(10),
                textDecorationLine: 'underline',
              }}>
              22/11/2023
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: 'black',
                fontWeight: '500',
                // backgroundColor: 'red',
              }}>
              *Status
            </Text>
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#959595',
                fontWeight: '500',
                // marginTop: scaleSize(10),
                textDecorationLine: 'underline',
              }}>
              Open
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#337ab7',
            padding: scaleSize(10),
            width: '30%',
            alignItems: 'center',
            borderRadius: scaleSize(5),
            marginTop: scaleSize(20),
            alignSelf: 'center',
          }}
          onPress={() =>
            // setShowData(true)
            bottomSheet.current.open()
          }>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: 'white',
              fontWeight: '500',
              // marginTop: scaleSize(10),
            }}>
            Filter
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/image/listView.jpeg')}
          style={{
            width: scaleSize(150),
            height: scaleSize(100),
            alignSelf: 'center',
            marginTop: scaleSize(30),
          }}
          resizeMode="contain"
        />
      </ScrollView>
      <FilterListBottomSheet
        refRBSheet={bottomSheet}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
}
