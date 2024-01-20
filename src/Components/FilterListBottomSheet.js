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
import SVG_CLOSE from '../assets/svg/cross.svg';
import RBSheet from 'react-native-raw-bottom-sheet';
import {HEIGHT, scaleFont, scaleSize} from '../utils/Mixins';
import {useRoute} from '@react-navigation/native';
import Screens from '../navigations/Screens';
export default function FilterListBottomSheet({refRBSheet, navigation}) {
  const route = useRoute();
  console.log(route);
  const data = [1, 2, 3, 4, 5];
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        // animationType="slide"
        closeOnDragDown={false}
        closeOnPressMask={false}
        openDuration={300}
        closeDuration={300}
        closeOnPressBack={true}
        dragFromTopOnly={true}
        height={HEIGHT - scaleSize(280)}
        customStyles={{
          container: {
            borderTopLeftRadius: scaleSize(20),
            borderTopRightRadius: scaleSize(20),
          },
        }}
        keyboardAvoidingViewEnabled>
        <View
          style={{
            backgroundColor: '#337ab7',
            paddingVertical: scaleSize(15),
            paddingHorizontal: scaleSize(25),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginBottom: scaleSize(10),
          }}>
          <Text
            style={{
              fontSize: scaleFont(18),
              color: 'white',
              fontWeight: '500',
            }}>
            List Of Data
          </Text>
          <SVG_CLOSE onPress={() => refRBSheet.current.close()} />
        </View>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  refRBSheet.current.close();
                  navigation.navigate(Screens.DETAIL);
                }}
                key={index}
                style={{
                  backgroundColor: '#04C9EC0D',
                  marginHorizontal: scaleSize(20),
                  padding: scaleSize(20),
                  borderRadius: scaleSize(10),
                  marginBottom: scaleSize(20),
                  elevation: 4,
                  shadowColor: 'gray',
                  marginTop: index == 0 ? scaleSize(10) : 0,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Client Name -{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#666666',
                      fontWeight: '500',
                      flex: 1,
                    }}>
                    Utkarsh
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Phone Number -{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#666666',
                      fontWeight: '500',
                      flex: 1,
                    }}>
                    88886666955
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Meeting Date -{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#666666',
                      fontWeight: '500',
                      flex: 1,
                    }}>
                    20/01/2024
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Shift Time -{' '}
                  </Text>
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
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Client Address -{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#666666',
                      fontWeight: '500',
                      flex: 1,
                    }}>
                    Forest Hills South Side 440018
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </RBSheet>
    </View>
  );
}
