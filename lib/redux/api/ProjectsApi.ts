import { FakeForemostApi } from "../FakeForemostApi"

export const ProjectsApi = FakeForemostApi.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => ({
        url: `projects`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProjectsQuery } = ProjectsApi
