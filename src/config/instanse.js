import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import baseURL from "./configurations";
import ServiceUrl from "../enums";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL
});

const instanceApi = createApi({
  reducerPath: "API",
  baseQuery,
  tagTypes: [ServiceUrl.CLIENTS],
  endpoints: () => ({})
});

export default instanceApi;
