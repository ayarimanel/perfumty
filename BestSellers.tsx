import React from 'react'
import { ProductCard } from './ProductCard'
export function BestSellers() {
  const products = [
    {
      id: 1,
      name: 'Celestial Bloom',
      image:
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=500&auto=format&fit=crop',
      topNotes: 'Bergamot, Green Tea',
      middleNotes: 'Jasmine, Raspberry',
      baseNotes: 'Sandalwood, White Musk',
      vibe: 'Fresh, floral, and elegant—perfect for daytime wear.',
    },
    {
      id: 2,
      name: 'Golden Dusk',
      image:
        'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?q=80&w=500&auto=format&fit=crop',
      topNotes: 'Grapefruit, Ginger',
      middleNotes: 'Caramel, Blackcurrant',
      baseNotes: 'Coffee, Praline',
      vibe: 'Cozy, sweet, and addictive—perfect for fall and winter.',
    },
    {
      id: 3,
      name: 'Velvet Noir',
      image:
        'https://images.unsplash.com/photo-1593487568720-92097fb460fb?q=80&w=500&auto=format&fit=crop',
      topNotes: 'Pink Pepper, Cardamom',
      middleNotes: 'Vanilla, Almond',
      baseNotes: 'Tonka Bean, Amber',
      vibe: 'Sensual, warm, and luxurious—ideal for evening occasions.',
    },
    {
      id: 4,
      name: 'Ocean Whisper',
      image:
        'https://images.unsplash.com/photo-1610461888750-10bfc601b874?q=80&w=500&auto=format&fit=crop',
      topNotes: 'Pine, Basil',
      middleNotes: 'Lavender, Fig',
      baseNotes: 'Cedarwood, Vetiver',
      vibe: 'Sensual, warm, and luxurious—ideal for evening occasions.',
    },
  ]
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl uppercase font-bold text-center text-[#706C61] mb-8">
        Discover our most-loved scents, crafted to perfection
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#706C61] pb-2 border-b border-[#706C61] inline-block">
          Best Sellers
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
