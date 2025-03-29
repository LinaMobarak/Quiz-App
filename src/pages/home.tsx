import React, { useEffect } from 'react'
import { ProductType } from '../components/ProductType';
import { useState } from 'react';

const Quiz: ProductType[] = [ 
    {
        id: 1,
        question: "What is the capital of France?",
        answer: ['paris', 'london', 'berlin', 'madrid'],
        trueAns: "Paris",
    },
    {
        id: 2,
        question: "What is the capital of Syria?",
        answer: ['paris', 'damascus', 'berlin', 'cairo'],
        trueAns: "Damascus",
    },
    {
        id: 3,
        question: "What is the capital of Iraq?",
        answer: ['baghdad', 'homs', 'abu dhabi', 'madrid'],
        trueAns: "Baghdad",
    },
    {
        id: 4,
        question: "What is the capital of Egypt?",
        answer: ['Cairo', 'london', 'berlin', 'madrid'],
        trueAns: 'Cairo'
    },
    
    {
        id: 5,
        question: "What is the capital of UAE?",
        answer: ['paris', 'Abu-Dhabi', 'berlin', 'madrid'],
        trueAns: "Abu-Dhabi",
    },
]
const Home = () => {
    const [quiz, setQuiz] = useState<ProductType[]>(Quiz);
    useEffect(() => {

        setQuiz(Quiz);
    },[])

    return (

    <div>
        <div>
            <h1 className='text-center text-4xl font-bold'>Quiz App</h1>
            <div className='flex flex-col items-center justify-center'>
                {quiz.map((item) => (
                    <div key={item.id}>
                        <h2 className='text-2xl font-semibold'>{item.question}</h2>
                        <div className='flex flex-col items-center'>
                            {item.answer.map((ans, index) => (
                                <button key={index} className='bg-blue-500 text-white p-2 m-2 rounded-md'>{ans}</button>
                            ))}
                        </div>
                        {/* <p className='text-lg font-semibold'>Correct Answer: {item.trueAns}</p> */}
                    </div>
                ))}
            </div>  

        </div>
    </div>
    
  )
}

export default Home