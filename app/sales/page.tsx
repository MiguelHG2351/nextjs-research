import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <p className='block'>
      Will be render on the server
      </p>
      <Link className='text-indigo-500' href="/">Link</Link>
    </div>
  )
}
