import { discoverMovies } from "@/lib/fetchresults";
import Exploremovies from "./Exploremovies";

async function SearchBannerWrapper() {
  const movies = await discoverMovies()
  return <Exploremovies exploremovies={movies} />;
}

export default SearchBannerWrapper;