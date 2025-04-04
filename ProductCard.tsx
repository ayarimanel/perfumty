import React from 'react'
export function ProductCard({ product }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-[#706C61] mb-2">
        {product.name}
      </h3>
      <div className="flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain"
        />
      </div>
      <div className="space-y-1 mb-3 text-[#706C61]">
        <p>
          <span className="font-medium">Top Notes:</span> {product.topNotes}
        </p>
        <p>
          <span className="font-medium">Middle Notes:</span>{' '}
          {product.middleNotes}
        </p>
        <p>
          <span className="font-medium">Base Notes:</span> {product.baseNotes}
        </p>
      </div>
      <p className="text-sm mb-4 text-[#706C61]">
        <span className="font-medium">Vibe:</span> {product.vibe}
      </p>
      <button className="bg-[#FF8966] hover:bg-[#ff7a54] text-white px-4 py-2 rounded text-sm uppercase tracking-wider self-start">
        Shop Now
      </button>
    </div>
  )
}
