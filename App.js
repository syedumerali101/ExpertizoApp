import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import QuizQuestion from './src/screens/Quiz/QuizQuestion';
import DemoScreen from './src/screens/Quiz/DemoScreen';
import NewDemo from './src/screens/NewDemo';
import Demo2 from './src/screens/Demo2';

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <AppContainer />;
  }
}

const AppStackNavigaor = createStackNavigator(
  {
    Demo2: Demo2,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
      },
    },
  },
);

const AppContainer = createAppContainer(AppStackNavigaor);
