import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="flex items-center space-x-7">
          <Link href="/shop" className="text-black font-medium hover:text-gray-700 transition-colors">
            Shop
          </Link>
          <Link href="/faq" className="text-black font-medium hover:text-gray-700 transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-black font-medium hover:text-gray-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="flex items-center justify-center flex-shrink-0">
          <h1 className="text-3xl font-bold text-black tracking-wide">
            Meta<span className="text-gray-800">Mart</span>
          </h1>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-teal-500 rounded-full transition-colors">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <Link href="/login" className="flex items-center space-x-1 hover:bg-teal-500 px-3 py-2 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-sm font-medium text-black">Login</span>
          </Link>
          <button className="relative p-2 hover:bg-teal-500 rounded-full transition-colors">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Page