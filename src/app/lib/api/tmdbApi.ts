import { axiosInstance } from "./axiosInstance";

export const getPopularMovies = async () => {
  try {
    const response = await axiosInstance.get(
      "/movie/popular?language=en-US&page=1"
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get(
      "/movie/trending?language=en-US&page=1"
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
