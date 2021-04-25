import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

function DemoScreen(){
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Made With Love',
            button: 'shop now',
            icon: require('../../images/imag1.jpg')
          },
          {
            id: 2,
            title: 'Made With Love',
            button: 'shop now',
            icon: require('../../images/image2.jpg')

          },
          {
            id: 2,
            title: 'Made With Love',
            button: 'shop now',
            icon: require('../../images/image2.jpg')

          },

    ])
    const _renderItem = ({item, index}) => {
        return (
            <View>
                {/* <Text>{item.title}</Text>
                <Image source={item.icon}/> */}

                <View>
                    <Image style={{height: 100, width: 200}} source={item.icon} />
                </View>
            </View>
        );
    }
    return(
        <Carousel
              data={data}
              renderItem={_renderItem}
              sliderWidth={450}
              itemWidth={300}
              layout='default'
              
            />
    )
}

export default DemoScreen;