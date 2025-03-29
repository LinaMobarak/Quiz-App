import React, { useEffect } from 'react'
// import { useState } from 'react';
import '../index.css'
import { useQuizStore } from '../stores/Quiz-store';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const {allQuestions, currentQuestion, setCurrentQuestion, checkAnswer , score ,userAnswers} = useQuizStore()
    const [scorey, setScorey] = React.useState(0)
    const [isShow , setIsShow] = React.useState(true)
    const [timer, setTimer] = React.useState(10);
    const [isActive, setIsActive] = React.useState(true);
    
    useEffect(() => {
        if(timer === 0) {
            console.log("Time's up!")
            next()
        }
        const interval = setInterval(() => {
            if (isActive) {
                setTimer((prev) => Math.max (prev - 1, 0));
            }
        }, 1000);
        return () => clearInterval(interval);
    })

    
    const next = () => {
        setTimer(10)
        setIsShow(!isShow)

        {currentQuestion < (allQuestions.length - 1 ) ? 
            setCurrentQuestion(currentQuestion + 1)
            : 
            alert("Quiz Completed")}
    }

    const navigate = useNavigate()
    const goToRes = () => {
        if(currentQuestion === (allQuestions.length - 1 )) {
        navigate('/result')
        }

    }
    const finish = () => {
        setIsShow(true)
        setScorey(score);
        setIsActive(false);
        
    }

    const handleAnswer = (selectedOption: string) => {
        checkAnswer(selectedOption);
        const newAnswers = [...userAnswers, selectedOption];
        useQuizStore.setState({ userAnswers: newAnswers });
        setIsShow(!isShow)

    };

    return (
        
    <div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-semibold'>Time Left: {timer} seconds</h2>
            </div>
        <div>
            <h1 className='text-center text-4xl font-bold'>Quiz App</h1>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-semibold'>{allQuestions[currentQuestion].question}</h2>
                    <div className='flex flex-col items-center'>
                        {allQuestions[currentQuestion].options.map((ans, index) => (
                            <button key={index}
                                onClick={() => handleAnswer(ans)} 
                                className='bg-blue-500 text-white p-2 m-2 rounded-md'>{ans}</button>
                                
                            ))}
                    </div>

                    <button onClick={next} disabled={isShow} >Next</button>
                    <button onClick={finish}>Finish</button>
                    {/* <p >{scorey}</p> */}

                    <div style={{cursor: 'pointer'}}onClick={goToRes}>Show Full Test</div>
                    </div>
                
            </div>  

        </div>
    
    
    )
}

export default Home