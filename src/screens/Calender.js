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
import ICONS from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function Calender(props) {
  const [listData, setListData] = useState([{id: 1, title: 'Monday'}]);
  const [showData, setShowData] = useState(false);
  const renderItem = ({item}) => {
    return (
      <View style={{marginTop: scaleSize(10)}}>
        <Text style={{color: 'gray', fontWeight: '700'}}>
          {item.title} - 24/01/2024
        </Text>
        <View
          style={{
            // backgroundColor: '#04C9EC0D',
            padding: scaleSize(10),
            marginVertical: scaleSize(10),
            // alignItems: 'center',
            borderWidth: 1,
            borderRightColor: '#66666666',
            borderTopColor: '#66666666',
            borderBottomColor: '#66666666',
            borderRadius: 10,
            borderLeftColor: '#0388D4',
            borderLeftWidth: scaleSize(8),
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
        </View>
        {/* <View
            style={{
              backgroundColor: '#04C9EC0D',
              padding: scaleSize(20),
              marginVertical: scaleSize(10),
              // flex: 0.4,
              alignItems: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>
              12:45PM-20:45PM
            </Text>
            <Text style={{color: 'black', fontWeight: '500'}}>Private pay</Text>
            <Text style={{color: 'black', fontWeight: '500'}}>SingIn-1:00Am</Text>
            <Text style={{color: 'black', fontWeight: '500'}}>
              SingOut-2:00Am
            </Text>
          </View> */}
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#337ab7'}}>
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
          Calender
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: scaleSize(20),
          borderTopLeftRadius: scaleSize(20),
          // paddingHorizontal: scaleSize(25),
        }}>
        <View
          style={{
            borderBottomWidth: scaleSize(1),
            borderBottomColor: '#D8D8D8',
            // marginHorizontal: scaleSize(25),
          }}>
          <ReactNativeCalendarStrip
            scrollable
            // calendarAnimation={{type:"sequence",duration:30}}
            style={{height: scaleSize(150), paddingTop: 20, paddingBottom: 10}}
            // calendarColor={'white'}
            calendarHeaderStyle={{
              color: 'black',
              fontSize: scaleFont(20),
              // fontFamily: FontStyle.fontMedium,
              textTransform: 'uppercase',
            }}
            dateNumberStyle={{
              color: 'black',
              fontSize: scaleFont(13),
              // fontFamily: FontStyle.fontSemiBold,
              lineHeight: Platform.OS === 'ios' ? scaleSize(16) : null,
            }}
            dateNameStyle={{
              color: 'black',
              fontSize: scaleFont(13),
              // fontFamily: FontStyle.fontSemiBold,
            }}
            iconContainer={{flex: 0.1}}
            highlightDateNameStyle={{
              fontSize: scaleFont(13),
              color: 'white',
              // fontFamily: FontStyle.fontSemiBold,
            }}
            highlightDateNumberStyle={{
              fontSize: scaleFont(13),
              color: 'white',
              // fontFamily: FontStyle.fontSemiBold,
              lineHeight: Platform.OS === 'ios' ? scaleSize(16) : null,
            }}
            daySelectionAnimation={{
              type: 'background',
              highlightColor: '#337ab7',
              duration: 200,
              borderWidth: 1,
              height: 50,
              fontSize: scaleFont(16),
              borderHighlightColor: 'blue',
            }}
            // startingDate={'2023-05-23'}
            // minDate={'2023-05-23'}
            // maxDate={'2023-06-03'}
            // datesBlacklist={['2023-05-22']}
            // selectedDate={selectedDate}
            onDateSelected={date =>
              // onSelectedDate(date)
              // console.log(date)
              setShowData(true)
            }
            dateContainerStyle={{
              backgroundColor: 'red',
              margin: 10,
              fontSize: scaleFont(20),
              // fontFamily: FontStyle.fontSemiBold,
            }}
            borderHighlightColor={'red'}
            highlightDateContainerStyle={{
              borderRadius: scaleSize(4),
            }}
          />
        </View>
        {showData ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listData}
            renderItem={renderItem}
            style={{paddingHorizontal: scaleSize(25), height: '100%'}}
          />
        ) : (
          // <Image source={require()} />
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              // justifyContent: 'center',
              marginTop: scaleSize(90),
            }}>
            <Text
              style={{
                fontSize: scaleFont(18),
                color: 'gray',
                fontWeight: '500',
              }}>
              Please select date for data
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
