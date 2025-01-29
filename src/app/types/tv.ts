export interface TV {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
}

export interface TVResponse {
  results: TV[];
  page: number;
  total_pages: number;
  total_results: number;
}
