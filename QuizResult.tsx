import React from 'react'
export function QuizResult({ answers }) {
  const calculatePreferences = () => {
    const preferences = {
      top: {},
      middle: {},
      base: {},
    }
    answers.forEach((answer) => {
      ;['top', 'middle', 'base'].forEach((level) => {
        preferences[level][answer[level]] =
          (preferences[level][answer[level]] || 0) + 1
      })
    })
    return {
      top: Object.entries(preferences.top).sort((a, b) => b[1] - a[1])[0][0],
      middle: Object.entries(preferences.middle).sort(
        (a, b) => b[1] - a[1],
      )[0][0],
      base: Object.entries(preferences.base).sort((a, b) => b[1] - a[1])[0][0],
    }
  }
  const preferences = calculatePreferences()
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-[#706C61] mb-6">
          Your Perfect Scent Profile
        </h2>
        <div className="space-y-6">
          <div className="p-4 bg-[#F8F4E3] rounded-lg">
            <h3 className="text-xl font-semibold text-[#706C61] mb-2">
              Top Notes
            </h3>
            <p className="text-[#706C61]">{preferences.top}</p>
          </div>
          <div className="p-4 bg-[#F8F4E3] rounded-lg">
            <h3 className="text-xl font-semibold text-[#706C61] mb-2">
              Middle Notes
            </h3>
            <p className="text-[#706C61]">{preferences.middle}</p>
          </div>
          <div className="p-4 bg-[#F8F4E3] rounded-lg">
            <h3 className="text-xl font-semibold text-[#706C61] mb-2">
              Base Notes
            </h3>
            <p className="text-[#706C61]">{preferences.base}</p>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 bg-[#FF8966] hover:bg-[#ff7a54] text-white px-6 py-3 rounded-full uppercase font-medium tracking-wider"
        >
          Create Your Custom Perfume
        </button>
      </div>
    </div>
  )
}
