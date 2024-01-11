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
import SVG_ICON from '../assets/svg/icon.svg';
import SVG_LOCK from '../assets/svg/lock.svg';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';
export default function Login(props) {
  // const {productId, name, detail, login, password} = props.route.params;
  // console.log(props);
  const [mobile, setMobile] = useState();
  const [OTP, setOTP] = useState();
  const nextPage = async () => {
    // await AsyncStorage.setItem('login', '1');
    // props.navigation.navigate(Screens.PRODUCT_DETAIL, {
    //   productId: productId,
    //   name: name,
    //   detail: detail,
    //   // login: login,
    //   // password: password,
    // });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: scaleSize(10)}}>
          {/* <SVG_ICON height={scaleSize(190)} width={scaleSize(190)} /> */}
          <Image
            source={require('../assets/image/logo.png')}
            style={{
              height: scaleSize(40),
              width: scaleSize(200),
              marginTop: scaleSize(80),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: scaleFont(18),
              color: '#000000',
              fontWeight: '500',
            }}>
            OTP Verification
          </Text>
        </View>
        <View
          style={{
            height: 1,
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
                value={mobile}
                style={{marginLeft: 10}}
                placeholderTextColor={'gray'}
                keyboardType="numeric"
              />
            </View>
            <SVG_MOBILE />
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
            OTP
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
                onChangeText={text => setOTP(text)}
                placeholder={'OTP'}
                value={OTP}
                style={{marginLeft: 10}}
                placeholderTextColor={'gray'}
              />
            </View>
            <SVG_LOCK />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: scaleSize(25),
            marginTop: scaleSize(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: scaleFont(16),
              color: '#959595',
              fontWeight: '500',
              // marginBottom: scaleSize(10),
            }}>
            Didn’t receive OTP?{' '}
            <Text
              style={{
                fontSize: scaleFont(16),
                color: '#F7850F',
                fontWeight: '500',
                // marginBottom: scaleSize(10),
              }}>
              Resend
            </Text>
          </Text>
          <Text
            style={{
              fontSize: scaleFont(16),
              color: 'black',
              fontWeight: '500',
              // marginBottom: scaleSize(10),
            }}>
            0:25
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: scaleSize(120)}}>
          <Text
            style={{
              fontSize: scaleFont(16),
              color: '#959595',
              fontWeight: '500',
              marginBottom: scaleSize(30),
            }}>
            Back
          </Text>
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
              VERIFY
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
