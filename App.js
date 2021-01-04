import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import QuizQuestion from './src/screens/Quiz/QuizQuestion';

export default class App extends React.Component{
  static navigationOptions = {
  header: null,
  };
  
  render(){
    return(
      <AppContainer/>
    );
  }
}



const AppStackNavigaor = createStackNavigator({
  
  QuizQuestion: QuizQuestion
  
},

{
  defaultNavigationOptions:{
      headerStyle:{
          backgroundColor: '#ffffff'
      }
  }
});

const AppContainer = createAppContainer(AppStackNavigaor);