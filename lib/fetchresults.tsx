import { SearchResults } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "true");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");
  
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.MOVIEDB_ACESS_TOKEN}`,
      },
      next: {
        revalidate: cacheTime || 60 * 60 * 24,
      },
    };
    const response = await fetch(url.toString(), options);
    const data = (await response.json());
    return data;
  
}

export async function getLatestMovies() {
const url = new URL('https://api.themoviedb.org/3/movie/popular');
const data=await fetchFromTMDB(url);
return data.results;
};

export async function discoverMovies() {
  const url = new URL('https://api.themoviedb.org/3/movie/popular');
  const data=await fetchFromTMDB(url);
  return data.results;
  };


  export async function getSearchedMovies(term: string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");
  
    url.searchParams.set("query", term);
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");
  
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.MOVIEDB_ACESS_TOKEN}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    };
  
    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;
  
    return data.results;
  }


  export async function getUpcomingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await fetchFromTMDB(url);
  
    return data.results;
  }
  
  export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await fetchFromTMDB(url);
  
    return data.results;
  }
  
  export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data = await fetchFromTMDB(url);
  
    return data.results;
  }

  export async function getPopularTv() {
    const url = new URL("https://api.themoviedb.org/3/tv/top_rated");
    const data = await fetchFromTMDB(url);
    return data.results;
  }
  export async function getTrending() {
    const url = new URL("https://api.themoviedb.org/3/trending/all/day?");
    const data = await fetchFromTMDB(url);
    return data.results;
  }


  