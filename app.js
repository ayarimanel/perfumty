import React from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { PersonalityQuiz } from './components/PersonalityQuiz'
import { BestSellers } from './components/BestSellers'
export function App() {
  return (
    <div className="w-full min-h-screen bg-[#F8F4E3]">
      <Header />
      <main>
        <HeroSection />
        <PersonalityQuiz />
        <BestSellers />
      </main>
    </div>
  )
}
