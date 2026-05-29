import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/' }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => 'api/ebac_sports',
    }),
  }),
});

export const { useGetProdutosQuery } = api;