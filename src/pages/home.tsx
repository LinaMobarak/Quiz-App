import React from 'react'
// import { useState } from 'react';
import '../index.css'
import { useQuizStore } from '../stores/Quiz-store';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const {allQuestions, currentQuestion, setCurrentQuestion, checkAnswer , score , userAnswers} = useQuizStore()
    const [scorey, setScorey] = React.useState(0)
    
    const next = () => {
        {currentQuestion < allQuestions.length - 1 ? 
            setCurrentQuestion(currentQuestion + 1)
            : 
            alert("Quiz Completed")}
    }

    const navigate = useNavigate()
    const goToRes = () => { 
        navigate('/result')

    }

    return (

    <div>
        <div>
            <h1 className='text-center text-4xl font-bold'>Quiz App</h1>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-semibold'>{allQuestions[currentQuestion].question}</h2>
                    <div className='flex flex-col items-center'>
                        {allQuestions[currentQuestion].options.map((ans, index) => (
                            <button key={index}
                                onClick={() => checkAnswer(ans)} 
                                className='bg-blue-500 text-white p-2 m-2 rounded-md'>{ans}</button>
                                
                            ))}
                    </div>

                    <button onClick={next}>Next</button>
                    <button onClick={() => setScorey(score)}>Finish</button>
                    <p >{scorey}</p>

                    <div style={{cursor: 'pointer'}}onClick={goToRes}>Show Full Test</div>
                    </div>
                
            </div>  

        </div>
    
    
    )
}

export default Home