import { MovieResponse } from "../types/movie";

export async function fetchMovieAPI<T = MovieResponse>(
  endpoint: string,
  params?: Record<string, string | number>,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error("API configuration is missing");
  }

  // URL ve query parametrelerini oluştur
  const url = new URL(`${baseUrl}${endpoint}`);
  url.searchParams.append("api_key", apiKey);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
  }

  // headers'ı ayarla
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    ...options?.headers, // Eğer options'ta headers varsa, bunları da ekle
  };

  const response = await fetch(url.toString(), {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
