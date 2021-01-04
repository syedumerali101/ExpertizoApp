import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import QuizQuestions from '../../../questions.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

class Answers extends React.Component {
  static propTypes = {
    noOfIndex: PropTypes.number,
  };

  static defaultProps = {
    noOfIndex: 0,
  };

  onClick = item => {
    console.log(item, 'items');
  };

  allAnswers = () => {
    const everyQuestions = QuizQuestions[this.props.noOfIndex];
    const correctAnswer = everyQuestions.correct_answer;
    const incorrect_answers = everyQuestions.incorrect_answers;
    const finalArray = incorrect_answers.concat(correctAnswer);
    let i = finalArray.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = finalArray[i];
      finalArray[i] = finalArray[j];
      finalArray[j] = temp;
    }

    return finalArray.map((item, key) => {
      return (
        <TouchableOpacity
          onPress={this.onClick(item)}
          style={{paddingHorizontal: 20, padding: 10}}>
          <View
            style={{
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              paddingVertical: 18,
              borderColor: '#214769',
            }}>
            <Text style={{color: 'white'}}>{item}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#252c4a'}}>
        {this.allAnswers()}
      </View>
    );
  }
}

export default Answers;
