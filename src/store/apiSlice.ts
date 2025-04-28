import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000' // Aqui você ajusta para o backend correto, se precisar
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => '/produtos' // Endpoint que você quer buscar (exemplo)
    })
  })
});

// Hook gerado automaticamente pelo RTK Query
export const { useGetProdutosQuery } = apiSlice;