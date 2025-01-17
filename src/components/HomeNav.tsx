import React from 'react'

function HomeNav() {
  return (
    <nav className="bg-white border-b border-gray-200">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-3">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          />
         <h1 className=' text-blue-500 font-semibold text-1xl'><span className='text-green-500'>fuN</span>academY</h1>
        </div>

        {/* Login Button */}
        <div className="flex items-center">
          <button
            type="button"
            className="rounded-md bg-transparent px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 border-2 border-black"
          >
            Login
          </button>
        </div>
      </div>
    </div>
    <hr />
  </nav>
  
  )
}

export default HomeNav


