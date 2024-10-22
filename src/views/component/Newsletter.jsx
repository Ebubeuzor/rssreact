import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay Updated
            </h2>
            <p className="text-black">
              Get the latest updates and exclusive offers directly in your inbox.
            </p>
          </div>
          
          <form className="relative">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-grow px-4 py-3 rounded-lg sm:rounded-r-none 
                         text-slate-900 placeholder-slate-500
                         border border-slate-300 focus:border-blue-500 
                         focus:ring-2 focus:ring-blue-500 focus:outline-none
                         transition-colors duration-200"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-6 py-3 
                         bg-blue-600 hover:bg-blue-700 
                         rounded-lg sm:rounded-l-none
                         text-white
                         font-medium
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
            
            <p className="mt-3 text-sm text-slate-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter