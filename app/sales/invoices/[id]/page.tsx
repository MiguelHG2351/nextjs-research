import React from 'react'

export default function Invoices({ params }: { params: { id: string } }) {
  return (
    <div>params: {params.id}</div>
  )
}
