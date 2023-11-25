import { Fragment } from "react";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "dresses" || item.category === "shoes"
  );
  const bestSales = products.filter((item) => item.category === "watch");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Section
        title="New Arrivals"
        bgColor="#D8BFD8"
        productItems={newArrivalData}
      />
    </Fragment>
  );
};

export default Home;
