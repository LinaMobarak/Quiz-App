import React from 'react'
import { useQuizStore } from '../stores/Quiz-store'
import '../index.css'

const Result = () => {
    const allQuestions = useQuizStore.getState().allQuestions
    const userAnswers = useQuizStore.getState().userAnswers
    // console.log(userAnswers)
    
  return (

    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Quiz Completed</h1>
        <h2 className='text-2xl font-semibold'>Your Score:</h2>
        <p className='text-xl'>{useQuizStore.getState().score}</p>

        {allQuestions.map((question, index) => (
            <div key={index} className='border p-4 m-2 w-1/2'>
                <h3 className='text-lg font-semibold'>{question.question}</h3>
                <p className='text-sm'>Correct Answer: {question.answer}</p>
                <p className='text-sm'>Your Answer: {userAnswers[index]}</p>
            </div>
        ))}
        
    </div>
    
  )
}

export default Result