import {View, Text, TouchableOpacity, Share} from 'react-native';
import React from 'react';
// import dynamicLinks from '@react-native-firebase/dynamic-links';
export default function ProductDetail(props) {
  console.log(props.route.params);
  const {productId, name, detail} = props.route.params;

  const generateLink = async (productId, name, detail) => {
    try {
      const link = `https://www.abhijitkumar.com/home?productId=${productId}&name=${name}&detail=${detail}`;
      // const link = await dynamicLinks().buildShortLink(
      //   {
      //     link: `https://www.abhijitkumar.com/home?productId=${productId}&name=${name}&detail=${detail}`,
      //     domainUriPrefix: 'https://deeplinkdemoapp98.page.link',
      //     android: {
      //       packageName: 'com.deeplinking',
      //     },
      //     ios: {
      //       appStoreId: '123456789',
      //       bundleId: 'com.deepLinkingProjectBundleId',
      //     },
      //   },
      //   dynamicLinks.ShortLinkType.DEFAULT,
      // );
      console.log('link:', link);
      onPressShare(link);
      return link;
    } catch (error) {
      console.log('Generating Link Error:', error);
    }
  };
  const onPressShare = Shareurl => {
    Share.share(
      {
        message: Shareurl,
        // url: Shareurl,
      },
      {
        // Android only:
        dialogTitle: 'Share product',
      },
    );
  };
  return (
    <View
      style={{
        backgroundColor: '#FFE5B4',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{fontSize: 20, color: 'black'}}>product {productId}</Text>
      <Text style={{fontSize: 18, color: 'black'}}>product name {name}</Text>
      <Text style={{fontSize: 15, color: 'gray'}}>product detail {detail}</Text>
      <TouchableOpacity
        onPress={() => generateLink(productId, name, detail)}
        style={{
          backgroundColor: 'red',
          height: 60,
          width: 60,
          borderRadius: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize: 15, color: 'white'}}>share</Text>
      </TouchableOpacity>
    </View>
  );
}
