import { create } from "zustand"

interface Questions {
    id: number
    question: string
    options: string[]
    answer: string
}

interface QuizStore {
    allQuestions: Questions[]
    currentQuestion: number
    setCurrentQuestion: (index: number) => void
    checkAnswer: (selectedOption: string) => boolean
    score: number
    userAnswers: string[]

}

export const useQuizStore = create<QuizStore>((set, get) => ({
    allQuestions: [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        },
        {
        id: 2,
        question: "What is 5 × 6?",
        options: ["25", "30", "35", "40"],
        answer: "30",
        },
        {
        id: 3,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        },
        {
        id: 4,
        question: "Who wrote *Romeo and Juliet*?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain",
        ],
        answer: "William Shakespeare",
        },
        {
        id: 5,
        question: "What is the chemical symbol for water?",
        options: ["O₂", "CO₂", "H₂O", "NaCl"],
        answer: "H₂O",
        },
    ],
    score: 0,
    userAnswers: [],

    currentQuestion: 0,
    setCurrentQuestion: (index:number) => set({ currentQuestion: index }),
    checkAnswer: (selectedOption: string) => {
        const { allQuestions, currentQuestion } = get();
        const isCorrect = allQuestions[currentQuestion].answer === selectedOption;
        if (isCorrect) {
            set({ score: get().score + 1 });
        }
        return isCorrect;
    },

}))