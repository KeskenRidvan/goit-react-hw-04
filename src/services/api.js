import axios from "axios";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 10000,
});

export const searchImages = async (query, page = 1, perPage = 12) => {
  if (!accessKey) {
    throw new Error("Missing Unsplash access key.");
  }

  const response = await unsplashApi.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: accessKey,
    },
  });

  return response.data;
};
