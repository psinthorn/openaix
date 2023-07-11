import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': 'ab4564c842msh37648cd1ae99d96p1e0afcjsne6b42cfc7642',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

try {
	// const response = await axios.request(options);
	// console.log(response.data);
} catch (error) {
	console.error(error);
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', process.env.RAPID_API_HOST);
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`,
    })
  })
});