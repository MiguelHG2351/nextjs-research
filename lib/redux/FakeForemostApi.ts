import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl = process.env.API_BASE_URL
console.log(baseUrl)

export const FakeForemostApi = createApi({
  reducerPath: 'FakeForemosApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (header) => {
      header.set('X-Api-Key', `${process.env.REACT_APP_API_KEY}`)
      header.set('Authorization', `Bearer sdfdfdfadfadfdafsffs`)
      return header
    },
  }),
  endpoints: (build) => ({}),
  tagTypes: ['Benefit'],
})