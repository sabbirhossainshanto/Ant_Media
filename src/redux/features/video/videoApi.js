import { baseApi } from "../../api/baseApi";

export const videoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    videoFormat: builder.query({
      query: () => {
        return {
          url: `https://dream11.dev/api/video`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useVideoFormatQuery } = videoApi;
