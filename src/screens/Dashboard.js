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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ICONS from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
export default function Dashboard(props) {
  const [showData, setShowData] = useState(false);
  const bottomSheet = useRef();
  const data = [1, 2, 3, 4, 5];
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
          justifyContent: 'space-between',
          paddingHorizontal: scaleSize(25),
          paddingTop: scaleSize(40),
          paddingBottom: scaleSize(20),
        }}>
        <Image
          source={require('../assets/image/logo.png')}
          style={{
            height: scaleSize(40),
            width: scaleSize(150),
            // marginTop: scaleSize(80),
            backgroundColor: 'white',
          }}
          resizeMode="contain"
        />
        <TouchableOpacity style={{alignItems: 'center'}}>
          <FontAwesome name={'home'} size={scaleSize(25)} color={'white'} />
          <Text
            style={{
              fontSize: scaleFont(15),
              color: 'white',
              fontWeight: '700',
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => props.navigation.navigate(Screens.SCHEDULE)}>
          <FontAwesome name={'calendar'} size={scaleSize(21)} color={'white'} />
          <Text
            style={{
              fontSize: scaleFont(15),
              color: 'white',
              fontWeight: '700',
              marginTop: 5,
            }}>
            Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => props.navigation.navigate(Screens.HELP)}>
          <ICONS
            name={'help-circle-outline'}
            size={scaleSize(25)}
            color={'white'}
          />
          <Text
            style={{
              fontSize: scaleFont(15),
              color: 'white',
              fontWeight: '700',
            }}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: scaleSize(20),
        }}
        onPress={() => props.navigation.navigate(Screens.MY_PROGILE)}>
        <Text
          style={{
            fontSize: scaleFont(18),
            color: 'white',
            fontWeight: '500',
            // flex: 1,
            // textAlign: 'center',
            marginLeft: scaleSize(25),
          }}>
          Welcome, Utkarsh Singh
        </Text>
        <FontAwesome
          name={'edit'}
          size={scaleSize(15)}
          color={'white'}
          style={{marginLeft: scaleSize(10)}}
        />
      </TouchableOpacity>

      <View
        // showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
          flex: 1,
        }}>
        <Image
          source={require('../assets/image/listView.jpeg')}
          style={{
            width: scaleSize(80),
            height: scaleSize(50),
            alignSelf: 'center',
            marginVertical: scaleSize(20),
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            marginHorizontal: scaleSize(25),
            // marginTop: scaleSize(20),
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
            marginVertical: scaleSize(20),
            alignSelf: 'center',
          }}
          onPress={
            () => setShowData(true)
            // bottomSheet.current.open()
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
        {showData ? (
          <ScrollView>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // refRBSheet.current.close();
                    props.navigation.navigate(Screens.DETAIL);
                  }}
                  key={index}
                  style={{
                    // backgroundColor: '#04C9EC0D',
                    marginHorizontal: scaleSize(20),
                    padding: scaleSize(20),
                    borderRadius: scaleSize(10),
                    marginBottom: scaleSize(20),
                    elevation: 4,
                    shadowColor: 'gray',
                    // marginTop: index == 0 ? scaleSize(10) : 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                      <Icon
                        name={'call'}
                        size={scaleSize(18)}
                        color={'#337ab7'}
                      />
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
                  </View>
                  <Icon
                    name={'chevron-right'}
                    size={scaleSize(25)}
                    color={'#666666'}
                    // style={{marginRight: scaleSize(10)}}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(Screens.DETAIL);
            }}
            style={{
              // backgroundColor: '#04C9EC0D',
              marginHorizontal: scaleSize(20),
              padding: scaleSize(20),
              borderRadius: scaleSize(10),
              marginBottom: scaleSize(20),
              elevation: 4,
              shadowColor: 'gray',
              // marginTop: index == 0 ? scaleSize(10) : 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
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

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: scaleSize(2),
                }}>
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
            </View>
            <Icon
              name={'chevron-right'}
              size={scaleSize(25)}
              color={'#666666'}
              // style={{marginRight: scaleSize(10)}}
            />
          </TouchableOpacity>
        )}
      </View>
      <FilterListBottomSheet
        refRBSheet={bottomSheet}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
}
