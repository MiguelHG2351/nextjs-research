'use client'
import React from 'react'
import { useGetProjectsQuery } from '@/lib/redux/api/ProjectsApi'

// export const metadata = {
//   title: 'Invoices',
// }

export default function Invoices({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useGetProjectsQuery(null)

  return (
    <div>params: {params.id}</div>
  )
}
