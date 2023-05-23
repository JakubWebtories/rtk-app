// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://jsonplaceholder.typicode.com",
    baseUrl: "http://localhost:3500",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/todos",
      method: "GET",
      providesTags: ["Todos"],
    }),

    getDataById: builder.query({
      query: (id) => `/todos/${id}`,
      method: "GET",
    }),

    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    addItem: builder.mutation({
      query: (payload) => ({
        url: `/todos`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Todos"],
    }),
    updateItem: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetDataByIdQuery,
  useDeleteItemMutation,
  useAddItemMutation,
  useUpdateItemMutation,
} = api;
