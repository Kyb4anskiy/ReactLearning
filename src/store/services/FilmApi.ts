import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "node:inspector";
import { RootState } from "../store";

export const FilmApi = createApi({
  reducerPath: "FilmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e68a5f89ae16826a.mokky.dev",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token;
    //   if (token) headers.set("Authorization", `Bearer ${token}`);

    //   return headers;
    // },
  }),
  tagTypes: ["Film"],
  endpoints: (builder) => ({
    getFilm: builder.query<Film[], void>({
      query: () => "/films",
      providesTags: ["Film"],
    }),
    getFilmById: builder.query<Film[], number>({
      query: (id) => `/films/${id}`,
      providesTags: ["Film"],
    }),
    addFilm: builder.mutation<Film, Omit<Film, "id">>({
      query: (body) => ({
        url: "/films",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Film"],
    }),
  }),
});

export const { useGetFilmQuery, useGetFilmByIdQuery, useAddFilmMutation } =
  FilmApi;
