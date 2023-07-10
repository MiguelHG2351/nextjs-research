import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Data of invoices</div>
      {children}
    </div>
  )
}
