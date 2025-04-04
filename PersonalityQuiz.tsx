import React, { useState } from 'react'
import { QuizQuestion } from './QuizQuestion'
import { QuizResult } from './QuizResult'
export function PersonalityQuiz() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const questions = [
    {
      question: "What's your ideal weekend morning?",
      options: [
        {
          text: 'Fresh farmers market visit',
          image:
            'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500',
          notes: {
            top: 'Citrus',
            middle: 'Herbal',
            base: 'Woody',
          },
        },
        {
          text: 'Cozy breakfast in bed',
          image:
            'https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=500',
          notes: {
            top: 'Fruity',
            middle: 'Gourmand',
            base: 'Sweet',
          },
        },
        {
          text: 'Garden meditation',
          image:
            'https://images.unsplash.com/photo-1512576208008-555f36bd20a3?w=500',
          notes: {
            top: 'Green',
            middle: 'Floral',
            base: 'Musky',
          },
        },
        {
          text: 'Luxury spa day',
          image:
            'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500',
          notes: {
            top: 'Spicy',
            middle: 'Floral',
            base: 'Balsamic',
          },
        },
      ],
    },
    {
      question: 'Choose your dream garden:',
      options: [
        {
          text: 'Citrus grove with fresh herbs',
          image:
            'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=500',
          notes: {
            top: 'Citrus',
            middle: 'Herbal',
            base: 'Woody',
          },
        },
        {
          text: 'Rose garden in full bloom',
          image:
            'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500',
          notes: {
            top: 'Green',
            middle: 'Floral',
            base: 'Musky',
          },
        },
        {
          text: 'Tropical paradise',
          image:
            'https://images.unsplash.com/photo-1536166008459-58c81b7678c7?w=500',
          notes: {
            top: 'Fruity',
            middle: 'Floral',
            base: 'Sweet',
          },
        },
        {
          text: 'Ancient forest',
          image:
            'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=500',
          notes: {
            top: 'Green',
            middle: 'Herbal',
            base: 'Woody',
          },
        },
      ],
    },
    {
      question: 'Your favorite dessert?',
      options: [
        {
          text: 'Fresh fruit tart',
          image:
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
          notes: {
            top: 'Fruity',
            middle: 'Gourmand',
            base: 'Sweet',
          },
        },
        {
          text: 'Vanilla bean pastry',
          image:
            'https://images.unsplash.com/photo-1528975604071-b102401b7f42?w=500',
          notes: {
            top: 'Spicy',
            middle: 'Gourmand',
            base: 'Sweet',
          },
        },
        {
          text: 'Exotic spice cake',
          image:
            'https://images.unsplash.com/photo-1484632152040-840235adc262?w=500',
          notes: {
            top: 'Spicy',
            middle: 'Gourmand',
            base: 'Balsamic',
          },
        },
        {
          text: 'Lavender honey cake',
          image:
            'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=500',
          notes: {
            top: 'Green',
            middle: 'Floral',
            base: 'Sweet',
          },
        },
      ],
    },
  ]
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer])
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  if (!showQuiz) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-8 text-center">
        <h2 className="text-xl md:text-2xl uppercase font-bold text-[#706C61] tracking-wider mb-4">
          Find your signature scent - Take our personality quiz!
        </h2>
        <p className="text-[#706C61] mb-8 max-w-lg mx-auto">
          DISCOVER YOUR PERFECT FRAGRANCE BASED ON YOUR PERSONALITY AND
          PREFERENCES
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#FF8966] hover:bg-[#ff7a54] text-white px-6 py-3 rounded-full uppercase font-medium tracking-wider">
            Start customizing!
          </button>
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-[#C287E8] hover:bg-[#b576e4] text-white px-6 py-3 rounded-full uppercase font-medium tracking-wider"
          >
            Take personality quiz
          </button>
        </div>
      </section>
    )
  }
  if (answers.length === questions.length) {
    return <QuizResult answers={answers} />
  }
  return (
    <QuizQuestion
      question={questions[currentQuestion]}
      onAnswer={handleAnswer}
      progress={(currentQuestion + 1) / questions.length}
    />
  )
}
