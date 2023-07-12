'use client'
import React from 'react'
import { useGetProjectsQuery } from '@/lib/redux/api/ProjectsApi'

// export const metadata = {
//   title: 'Invoices',
// }

export default function Invoices({ params }: { params: { id: string } }) {
  console.log(params)
  const { data, error, isLoading } = useGetProjectsQuery(null)
  console.log(data, error, isLoading)

  return (
    <div>params: {params.id}</div>
  )
}
