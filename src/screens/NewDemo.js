import React, {useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import allData from '../components/allData';
import ListComponent from '../components/ListComponent/index';

function NewDemo() {
  const _renderItem = ({item, index}) => {
    return (
      <View>
        <ListComponent myData={item} />
      </View>
    );
  };
  return (
    <View>
      {/* <ListComponent data={allData} /> */}

      <FlatList data={allData} renderItem={_renderItem} numColumns="2" />
    </View>
  );
}

export default NewDemo;
