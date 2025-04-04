import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PersonalityQuiz } from './components/PersonalityQuiz';
import { BestSellers } from './components/BestSellers';

export function App() {
  return React.createElement('div', { className: 'w-full min-h-screen bg-[#F8F4E3]' },
    React.createElement(Header),
    React.createElement('main', null,
      React.createElement(HeroSection),
      React.createElement(PersonalityQuiz),
      React.createElement(BestSellers)
    )
  );
}
