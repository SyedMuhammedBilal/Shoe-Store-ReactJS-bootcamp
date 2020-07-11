import React from 'react'

export default function FooterBar() {
    return (
        <div>
            <footer className="text-gray-700 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
    <img src="/images/ll.png" alt="logo" style={{
                    'width':'130px',
                    'height': '75px',
                  }} />        
      
      <span className="ml-3 text-xl">Shoe Store</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 shoe store —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@NinjaBootcamp</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500"  href="https://twitter.com/knyttneve">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
         
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href="https://twitter.com/knyttneve">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href="https://twitter.com/knyttneve">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href="https://twitter.com/knyttneve">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
         <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
        </div>
    )
}
