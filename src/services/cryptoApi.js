// Need to use the React-specific entry point to allow generating React hooks
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./utils/axiosBaseQuery";

const cryptoApiHeaders = {
  "x-rapidapi-key":
    "coinranking4b450ee5a61ee8d9df1c2ad5c40044f8de6b6a5db721d881",
  "x-rapidapi-host": "api.coinranking.com/v2",
};

const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: axiosBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      // @ts-ignore
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = cryptoApi;
