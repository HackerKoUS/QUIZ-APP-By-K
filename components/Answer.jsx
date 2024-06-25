import React from 'react'
import { aveilQ } from './Quiz'
import { quizData } from './quizData'


export const Answer = () => {
  return (
    <>
    <div className="answers"><p>
    <h3>
        <h1>ANSWERS</h1><br />
        Q.{quizData[0].question}
        <br /><br />
        Ans.{quizData[0].answer}
        <br /><br />
    Q.{quizData[aveilQ[0]].question}
    <br />

<br />    Ans. {quizData[aveilQ[0]].answer}
    <br />
    <br />

    Q.{quizData[aveilQ[0]].question}
    <br />

<br />    Ans. {quizData[aveilQ[0]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[1]].question}
    <br />

<br />    Ans. {quizData[aveilQ[1]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[2]].question}
    <br />

<br />    Ans. {quizData[aveilQ[2]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[3]].question}
    <br />

<br />    Ans. {quizData[aveilQ[3]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[4]].question}
    <br />

<br />    Ans. {quizData[aveilQ[4]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[5]].question}
    <br />

<br />    Ans. {quizData[aveilQ[5]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[6]].question}
    <br />

<br />    Ans. {quizData[aveilQ[6]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[7]].question}
    <br />

<br />    Ans. {quizData[aveilQ[7]].answer}
    <br />
    <br />
    Q.{quizData[aveilQ[8]].question}
    <br />

<br />    Ans. {quizData[aveilQ[8]].answer}
    <br />
    <br />
     </h3>
   <br />
        
        </p>
        </div>
    </>
  )
}
