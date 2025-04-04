import React from 'react'
export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold text-[#706C61] mb-2">Perfume</h1>
        <h2 className="text-3xl font-medium text-[#706C61] mb-6 flex items-center">
          Customize your own
          <svg
            className="ml-2 w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17"
              stroke="#706C61"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 12H14M14 12L10 8M14 12L10 16"
              stroke="#706C61"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>
        <p className="text-[#706C61] mb-8 max-w-md">
          Design a fragrance that is uniquely yours! Choose from a variety of
          top, middle, and base notes to create a scent that matches your style.
          Customize the intensity, bottle size, and even add a personal touch
          with engraving. Whether you want something fresh, floral, or exotic,
          we'll help you craft the perfect perfume that's made just for you!
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=1000&auto=format&fit=crop"
            alt="Luxurious arrangement of pink and purple flowers"
            className="rounded-lg shadow-lg object-cover h-80"
          />
          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded shadow">
            <span className="text-sm text-[#706C61] font-medium">
              Flower complexities
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
