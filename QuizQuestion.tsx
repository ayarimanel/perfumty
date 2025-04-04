import React from 'react'
export function QuizQuestion({ question, onAnswer, progress }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="h-2 bg-[#F8F4E3] rounded-full">
          <div
            className="h-2 bg-[#C287E8] rounded-full transition-all duration-300"
            style={{
              width: `${progress * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#706C61] mb-8 text-center">
        {question.question}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.notes)}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={option.image}
                alt={option.text}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-lg font-medium">{option.text}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
