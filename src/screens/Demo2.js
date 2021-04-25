import React, {useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

function Demo2() {
  const [showItems, setShowItems] = useState(false);
  const handleItems = () => {
    setShowItems(false);
  };
  const handleMoreItems = () => {
    setShowItems(true);
  };
  const renderTabButtons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={handleItems}
          style={{backgroundColor: 'red', padding: 20}}>
          <Text>Tab1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleMoreItems}
          style={{backgroundColor: 'blue', padding: 20}}>
          <Text>Tab2</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItems = () => {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  };

  const renderMoreItems = () => {
    return (
      <View>
        <Text>How are you</Text>
      </View>
    );
  };
  return (
    <View>
      {renderTabButtons()}
      {showItems === false ? renderItems() : renderMoreItems()}
    </View>
  );
}

export default Demo2;
