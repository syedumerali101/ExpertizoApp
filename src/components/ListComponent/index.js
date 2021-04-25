import React, {useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

function ListComponent(props) {
  const [lock, setLock] = useState(false);

  const handleWish = () => {
    setLock(!lock);
  };
  const _renderItem = () => {
    return (
      <View style={{padding: 20}}>
        <View style={{padding: 20, borderWidth: 1}}>
          <TouchableOpacity onPress={handleWish}>
            {lock === false ? (
              <Image
                style={{height: 20, width: 20, marginBottom: 10}}
                source={require('../../images/empty.png')}
              />
            ) : (
              <Image
                style={{height: 20, width: 20, marginBottom: 10}}
                source={require('../../images/filled.png')}
              />
            )}
          </TouchableOpacity>

          <Text>{props.myData.title}</Text>
        </View>
      </View>
    );
  };
  return <View>{_renderItem()}</View>;
}

export default ListComponent;
