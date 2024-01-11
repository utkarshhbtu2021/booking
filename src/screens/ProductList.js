import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Screens from '../navigations/Screens';

export default function ProductList(props) {
  const data = [
    {
      id: 1,
      name: 'car',
      detail: 'fast car',
    },
    {
      id: 2,
      name: 'mobile',
      detail: 'smart phone',
    },
    {
      id: 3,
      name: 'Dress',
      detail: 'Jeans',
    },
    {
      id: 4,
      name: 'Laptop',
      detail: 'gaming laptop',
    },
    {
      id: 5,
      name: 'notebook',
      detail: '1000 page with white color',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate(Screens.PRODUCT_DETAIL, {
            productId: item.id,
            name: item.name,
            detail: item.detail,
          })
        }
        style={{
          backgroundColor: '#FFE5B4',
          margin: 20,
          padding: 20,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
        <Text style={{fontSize: 18, color: 'gray'}}>{item.detail}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 25, color: 'blue'}}>
        List
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}
