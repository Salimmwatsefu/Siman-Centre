import React, { useState } from 'react'

function LinkAnnouncement() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div>
      <div
        className="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-2 text-gray-900"
      >
        <span></span>

        <p className="text-center font-medium">
          Read our latest article on men's hidden struggles 
          <a 
            href="https://nation.africa/kenya/blogs-opinion/blogs/men-hidden-struggle-5092290" 
            className="inline-block underline text-blue-600 hover:text-blue-800 px-2"
            target="_blank"
            rel="noopener noreferrer"
          >
             Click here to read
          </a>
        </p>

        <button
          type="button"
          aria-label="Dismiss"
          className="rounded border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50 "
          onClick={() => setIsVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default LinkAnnouncement