import React, {useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

function Demo3() {
  const [data, setData] = useState(['option1', 'option2']);
  const renderMyButton = () => {
    return (
      <TouchableOpacity style={{flexDirection: 'row', paddingLeft: 20}}>
        <View>
          <Text>'>'</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <ModalDropdown
        style={{
          backgroundColor: 'red',
          alignSelf: 'flex-end',
        }}
        options={['option 1', 'option 2']}
        defaultValue="Select"
        renderRightComponent={renderMyButton}
        dropdownStyle={{width: 80}}
      />
    </View>
  );
}

export default Demo3;
