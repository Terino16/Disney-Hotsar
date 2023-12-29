import CarouselBanner from "@/components/CarouselBanner";
// import { getDiscoverMovies } from "@/lib/fetchresults";
import { data } from "@/lib/data";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  // const movies = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={data} />;
}

export default CarouselBannerWrapper;