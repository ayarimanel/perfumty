import React from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
export function Header() {
  return (
    <header className="w-full bg-[#FF8966] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-[#C287E8]">✿</span> Perfumty
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="border-b-2 border-white pb-1">
            Home
          </a>
          <a href="#" className="hover:border-b-2 hover:border-white pb-1">
            Shop
          </a>
          <a href="#" className="hover:border-b-2 hover:border-white pb-1">
            Manufacturing
          </a>
          <a href="#" className="hover:border-b-2 hover:border-white pb-1">
            Packaging
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <SearchIcon size={20} />
          </button>
          <button aria-label="Account">
            <UserIcon size={20} />
          </button>
          <button aria-label="Shopping bag">
            <ShoppingBagIcon size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
