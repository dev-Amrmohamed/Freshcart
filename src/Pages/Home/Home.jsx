import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import HomeCategories from "../../Components/HomeCategories/HomeCategories";
import HomeDeals from "../../Components/HomeDeals/HomeDeals";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import CategoriesProvider from "../../context/categories.context";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeCategories />
      <HomeDeals />
      <FeaturedProduct />
    </>
  );
}
