import { getTopRatedMovies } from "@/lib/fetchresults";
import Topratedmovies from "./Topratedmovies";

async function TopratedMoviesWrapper() {
  const movies = await getTopRatedMovies()
  return <Topratedmovies exploremovies={movies} />;
}

export default TopratedMoviesWrapper;