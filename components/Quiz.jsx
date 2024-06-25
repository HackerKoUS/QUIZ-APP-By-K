import React, { useState } from 'react';
import { quizData } from './quizData';
import { Link } from 'react-router-dom';


export var aveilQ=[];
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [i, seti]=useState(1);
  

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === quizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = Math.floor(Math.random() * 35);
    seti(i+1);
    if (i < 10) {
      setCurrentQuestion(nextQuestion);
      aveilQ.push(nextQuestion);
      console.log(aveilQ);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    seti(1);
    aveilQ=[];
  };


  return (
    <div className="quiz"><Link to={'/'}><div className="head1"><b>Kou-Quiz .</b></div></Link>
          
      {showScore ? (
        <>
          <div className="score">YOUR SCORE : {score} <br /><br /> FULL SCORE : 10 </div>
          <div className="buu">
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button><br />
          <button className='review-button'><Link to={"/answer"} className='pp'>
            Review Quiz</Link>
          </button>
          </div>
        </>
      ) : (
        <><div className="question">
            {quizData[currentQuestion].question}
          </div>
          <div className="options">
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;