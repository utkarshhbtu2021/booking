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

export default function Dashboard(props) {
  const [showData, setShowData] = useState(false);
  const data = [1, 2, 3];
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
        <View
          style={{marginHorizontal: scaleSize(25), marginTop: scaleSize(20)}}>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: 'black',
              fontWeight: '500',
            }}>
            From
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#959595',
                fontWeight: '500',
                // marginTop: scaleSize(10),
              }}>
              {' '}
              - 22/11/2023
            </Text>
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: 'black',
              fontWeight: '500',
              marginTop: scaleSize(10),
            }}>
            To
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#959595',
                fontWeight: '500',
                // marginTop: scaleSize(10),
              }}>
              {' '}
              - 22/12/2023
            </Text>
          </Text>
          <Text
            style={{
              fontSize: scaleFont(14),
              color: 'black',
              fontWeight: '500',
              marginTop: scaleSize(10),
            }}>
            Status
            <Text
              style={{
                fontSize: scaleFont(14),
                color: '#959595',
                fontWeight: '500',
                // marginTop: scaleSize(10),
              }}>
              {' '}
              - Open
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'gray',
              padding: scaleSize(10),
              width: '30%',
              alignItems: 'center',
              borderRadius: scaleSize(10),
              marginTop: scaleSize(20),
              alignSelf: 'center',
            }}
            onPress={() => setShowData(true)}>
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
        </View>
        {showData && (
          <View>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate(Screens.DETAIL)}
                  key={index}
                  style={{
                    backgroundColor: '#04C9EC0D',
                    marginHorizontal: scaleSize(20),
                    padding: scaleSize(20),
                    borderRadius: scaleSize(10),
                    marginTop: scaleSize(20),
                  }}>
                  <View style={{flexDirection: 'row', flex: 1}}>
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
                  <View style={{flexDirection: 'row', flex: 1}}>
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
                  <View style={{flexDirection: 'row', flex: 1}}>
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
                  <View style={{flexDirection: 'row', flex: 1}}>
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
                  <View style={{flexDirection: 'row', flex: 1}}>
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
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
