import Banner from "@/components/Home/Banner";
import Collection from "@/components/Home/Collection";
import Collections from "@/components/Home/Collections";
import Discovery from "@/components/Home/Discovery";
import ProductCatalog from "@/components/Home/ProductCatalog";
import Slider from "@/components/Home/Slider";


const Home = () => {
  return (
    <>
    <div className="mt-[135px]">
      <Slider/>
      <Collections/>
      <ProductCatalog/>
      <Collection/>
      <Banner/>
      <Discovery/>
    </div>
    </>
  );
}


export default Home;