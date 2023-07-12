import { FakeForemostApi } from "../FakeForemostApi"
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const ProjectsApi = FakeForemostApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => {
        return ({
          url: `projects`,
          method: 'GET',
        })
      },
    }),
  }),
  overrideExisting: module.hot?.status() === "apply",
})

export const { useGetProjectsQuery } = ProjectsApi
