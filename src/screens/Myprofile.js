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
import SVG_LOCK from '../assets/svg/lock.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';

export default function Myprofile(props) {
  const [mobile, setMobile] = useState();
  const [OTP, setOTP] = useState();
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
          Profile
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
        }}>
        <View style={{alignItems: 'center', marginTop: scaleSize(10)}}>
          <Image source={require('../assets/image/profile1.png')} />
          {/* <Text
            style={{
              fontSize: scaleFont(18),
              color: '#000000',
              fontWeight: '500',
            }}>
            Abhijit kumar
          </Text> */}
        </View>
        <View
          style={{
            height: 2,
            width: '90%',
            backgroundColor: '#EFEFEF',
            marginTop: scaleSize(20),
            alignSelf: 'center',
          }}
        />
        <View
          style={{marginHorizontal: scaleSize(25), marginTop: scaleSize(20)}}>
          <Text
            style={{
              fontSize: scaleFont(13),
              color: '#413E50',
              fontWeight: '500',
              marginBottom: scaleSize(10),
            }}>
            Full Name
          </Text>
          <View
            style={{
              borderColor: 'grey',
              borderRadius: scaleSize(12),
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.95, marginRight: scaleSize(20)}}>
              <TextInput
                variant="filled"
                onChangeText={text => setMobile(text)}
                placeholder={'Mobile'}
                value={'Utkarsh Singh'}
                style={{marginStart: 10, color: '#413E50'}}
                editable={false}
                placeholderTextColor={'black'}
              />
            </View>
            {/* <SVG_MOBILE /> */}
          </View>
        </View>
        <View
          style={{marginHorizontal: scaleSize(25), marginTop: scaleSize(20)}}>
          <Text
            style={{
              fontSize: scaleFont(13),
              color: '#413E50',
              fontWeight: '500',
              marginBottom: scaleSize(10),
            }}>
            E-mail
          </Text>
          <View
            style={{
              borderColor: 'grey',
              borderRadius: scaleSize(12),
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.95, marginRight: scaleSize(20)}}>
              <TextInput
                variant="filled"
                onChangeText={text => setMobile(text)}
                placeholder={'Mobile'}
                value={'UtkarshSingh@gmail.com'}
                style={{marginStart: 10, color: '#413E50'}}
                editable={false}
                placeholderTextColor={'black'}
              />
            </View>
            {/* <SVG_LOCK /> */}
          </View>
        </View>

        <View
          style={{marginHorizontal: scaleSize(25), marginTop: scaleSize(20)}}>
          <Text
            style={{
              fontSize: scaleFont(13),
              color: '#413E50',
              fontWeight: '500',
              marginBottom: scaleSize(10),
            }}>
            Mobile
          </Text>
          <View
            style={{
              borderColor: 'grey',
              borderRadius: scaleSize(12),
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.95, marginRight: scaleSize(20)}}>
              <TextInput
                variant="filled"
                onChangeText={text => setMobile(text)}
                placeholder={'Mobile'}
                value={'123456789'}
                style={{marginStart: 10, color: '#413E50'}}
                editable={false}
                placeholderTextColor={'black'}
              />
            </View>
            {/* <SVG_LOCK /> */}
          </View>
        </View>

        <View
          style={{marginHorizontal: scaleSize(25), marginTop: scaleSize(20)}}>
          <Text
            style={{
              fontSize: scaleFont(13),
              color: '#413E50',
              fontWeight: '500',
              marginBottom: scaleSize(10),
            }}>
            Hospital Name
          </Text>
          <View
            style={{
              borderColor: 'grey',
              borderRadius: scaleSize(12),
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.95, marginRight: scaleSize(20)}}>
              <TextInput
                variant="filled"
                onChangeText={text => setMobile(text)}
                placeholder={'Mobile'}
                value={'Ram Hospital'}
                style={{marginStart: 10, color: '#413E50'}}
                editable={false}
                placeholderTextColor={'black'}
              />
            </View>
            {/* <SVG_LOCK /> */}
          </View>
        </View>

        <View
          style={{
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(20),
            marginBottom: scaleSize(100),
          }}>
          <Text
            style={{
              fontSize: scaleFont(13),
              color: '#413E50',
              fontWeight: '500',
              marginBottom: scaleSize(10),
            }}>
            Address
          </Text>
          <View
            style={{
              borderColor: 'grey',
              borderRadius: scaleSize(12),
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.95, marginRight: scaleSize(20)}}>
              <TextInput
                variant="filled"
                onChangeText={text => setMobile(text)}
                placeholder={'Mobile'}
                value={'H.no. 543, near ram mandir, chandni chok ,new delhi'}
                multiline={true}
                style={{marginStart: 10, color: '#413E50'}}
                editable={false}
                placeholderTextColor={'black'}
              />
            </View>
            {/* <SVG_LOCK /> */}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          bottom: scaleSize(20),
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '90%',
            paddingVertical: scaleSize(15),
            backgroundColor: '#F7850F',
            borderRadius: 40,
            alignItems: 'center',
            // alignSelf: 'center',
          }}
          onPress={() => props.navigation.navigate(Screens.DASHBOARD)}>
          <Text
            style={{
              fontSize: scaleFont(18),
              color: '#FFF',
              fontWeight: '500',
              // marginBottom: scaleSize(30),
            }}>
            SAVE PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
