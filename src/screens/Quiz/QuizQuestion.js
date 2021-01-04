import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './styles';
import QuizQuestions from '../../../questions.json';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Answers from '../../components/Answers/index';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

class QuizQuestion extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    questionNo: 1,
    index: 0,
    rating: 0,
    scoreWidth: 150,
    score: 10,
    timerStart: false,
    totalDuration: 10000,
    timerReset: false,
  };

  toggleTimer = () => {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  };

  resetTimer = () => {
    this.setState({timerStart: false, timerReset: true});
  };

  handleTimerComplete = () => {
    console.log('done');
  };

  incrementQuestionNo = () => {
    this.setState({
      questionNo: this.state.questionNo + 1,
      scoreWidth: this.state.scoreWidth - 15,
    });
  };

  // renderTimer = () => {
  //   return(
  //     <View>
  //        <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
  //         reset={this.state.timerReset}
  //         handleFinish={this.handleTimerComplete}
  //          />
  //     </View>

  //   )
  // }

  renderLoading = () => {
    return (
      <LinearGradient
        colors={['#ec008c', '#fc6767']}
        style={{
          backgroundColor: 'black',
          marginHorizontal: this.state.scoreWidth,
          marginTop: 15,
          borderRadius: 20,
          paddingVertical: 8,
        }}>
        <Text style={{color: 'white', alignSelf: 'center'}}>
          {this.state.score}
        </Text>
      </LinearGradient>
    );
  };

  topHeading = () => {
    const questionCa = QuizQuestions[this.state.index].category;
    const newCategory = questionCa.replace(/[^\w\s0-9]/g, ' ');
    const question_Category = newCategory.replace(/[0-9]/g, '');
    return (
      <View style={styles.mainHeadingView}>
        <Text style={styles.mainHeadingText}>
          Question {this.state.questionNo}
          <Text style={{fontSize: 15}}>/10</Text>
        </Text>
        <Text style={{color: '#777fa5'}}>Category: {question_Category}</Text>
        <View>{this.difficultyStars()}</View>
      </View>
    );
  };

  renderHard = () => {
    this.setState({
      rating: this.state.rating + 3,
    });
  };

  renderEasy = () => {
    this.setState({
      rating: this.state.rating + 1,
    });
  };

  renderMedium = () => {
    this.setState({
      rating: this.state.rating + 2,
    });
  };

  componentDidMount() {
    const difficulty = QuizQuestions[this.state.index].difficulty;
    if (difficulty === 'hard') {
      this.renderHard();
    }
    if (difficulty === 'easy') {
      this.renderEasy();
    }
    if (difficulty === 'medium') {
      this.renderMedium();
    }
  }

  difficultyStars = () => {
    return (
      <View style={{paddingRight: 240}}>
        <AirbnbRating
          showRating={false}
          count={3}
          defaultRating={this.state.rating}
          size={15}
          isDisabled={true}
          selectedColor="#777fa5"
        />
      </View>
    );
  };

  questionDescription = () => {
    const questionDes = QuizQuestions[this.state.index].question;
    const newQuestion = questionDes.replace(/[^\w\s0-9]/g, ' ');
    const question_Description = newQuestion.replace(/[0-9]/g, '');
    return (
      <View style={{paddingHorizontal: 20}}>
        <View style={{padding: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>
            {question_Description}
          </Text>
        </View>
      </View>
    );
  };

  

  // allAnswers = () => {
  //   const everyQuestions = QuizQuestions[this.state.index];
  //   const correctAnswer = everyQuestions.correct_answer;
  //   const incorrect_answers = everyQuestions.incorrect_answers;
  //   const finalArray = incorrect_answers.concat(correctAnswer);
  //   let i = finalArray.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = finalArray[i];
  //     finalArray[i] = finalArray[j];
  //     finalArray[j] = temp;
  //   }

  //   return finalArray.map((item, key) => {
  //     return (
  //       <TouchableOpacity
  //         style={{paddingHorizontal: 20, padding: 10}}>
  //         <View
  //           style={{
  //             borderWidth: 2,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             borderRadius: 20,
  //             paddingVertical: 18,
  //             borderColor: '#214769',
  //           }}>
  //           <Text style={{color: 'white'}}>{item}</Text>
  //         </View>
  //       </TouchableOpacity>
  //     );
  //   });
  // };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#252c4a'}}>
        {this.renderLoading()}
        {/* {this.renderTimer()} */}
        {this.topHeading()}
        {this.questionDescription()}
        <Answers noOfIndex = {this.state.index} />
      </View>
    );
  }
}

export default QuizQuestion;
