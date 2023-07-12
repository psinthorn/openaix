import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const articleApi = createApi({
//     reducerPath: 'articleApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
//         prepareHeaders: (headers) => {
//             headers.set('X-RapidAPI-Key', process.env.REACT_APP_RAPID_API_KEY);
//             headers.set('X-RapidAPI-Host', process.env.REACT_APP_RAPID_API_HOST);

//             return headers;
//         },
//     }),
//     endpoints: (builder) => ({
//         getSummary: builder.query({
//             // encodeURIComponent() function encodes special characters that may be present in the parameter values
//             // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
//             query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
//         }),
//     }),
// })

// export const { useLazyGetSummaryQuery } = articleApi

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', process.env.REACT_APP_RAPID_API_HOST);

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`, 
    })
  })
});

export const { useLazyGetSummaryQuery } = articleApi;
