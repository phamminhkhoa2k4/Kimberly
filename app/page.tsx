import Collection from "@/components/Home/Collection";
import Collections from "@/components/Home/Collections";
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
    </div>
    </>
  );
}


export default Home;