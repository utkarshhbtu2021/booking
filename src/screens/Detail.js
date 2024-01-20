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
import ICONS from 'react-native-vector-icons/MaterialCommunityIcons';
import SVG_MOBILE from '../assets/svg/mobile.svg';
import {scaleFont, scaleSize} from '../utils/Mixins';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function Detail(props) {
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
        contentContainerStyle={{flex: 1}}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
          // paddingHorizontal: scaleSize(25),
        }}>
        {/* <View style={{flexDirection: 'row', flex: 1, marginTop: 20}}>
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
        </View> */}
        <View style={{flex: 1}}>
          <View
            style={{
              // backgroundColor: '#04C9EC0D',
              marginHorizontal: scaleSize(25),
              padding: scaleSize(20),
              borderRadius: scaleSize(10),
              marginBottom: scaleSize(20),
              elevation: 4,
              shadowColor: 'gray',
              marginTop: scaleSize(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', marginBottom: scaleSize(2)}}>
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
                <Icon name={'call'} size={scaleSize(18)} color={'#337ab7'} />
                <Text
                  style={{
                    fontSize: scaleFont(14),
                    color: '#337ab7',
                    fontWeight: '500',
                    // flex: 1,
                  }}>
                  888866669
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginBottom: scaleSize(2)}}>
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
              <View style={{flexDirection: 'row', marginBottom: scaleSize(2)}}>
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
              <View style={{flexDirection: 'row', marginBottom: scaleSize(2)}}>
                {/* <Text
                    style={{
                      fontSize: scaleFont(14),
                      color: '#000000',
                      fontWeight: '500',
                      flex: 0.5,
                    }}>
                    Client Address -{' '}
                  </Text> */}
                <Icon
                  name={'location-on'}
                  size={scaleSize(15)}
                  color={'#666666'}
                  style={{marginRight: scaleSize(10)}}
                />
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
              </View>
              {/* <Text></Text> */}
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
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: scaleSize(30),
              marginHorizontal: scaleSize(25),
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
            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: scaleSize(10),
              // borderWidth: 1,
              // borderColor: 'gray',
              alignItems: 'center',
              paddingHorizontal: scaleSize(10),
              margin: 10,
              borderRadius: 5,
              backgroundColor: '#337ab7',
            }}>
            <ICONS
              name={'cards-heart-outline'}
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
              ADLs
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
            }}>
            <Icon name={'notes'} size={scaleSize(18)} color={'white'} />
            <Text
              style={{
                color: 'white',
                flex: 1,
                marginLeft: scaleSize(10),
                fontSize: scaleFont(15),
                fontWeight: '500',
              }}>
              Notes
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
