import { Product as Products} from "@/types/product";
import Image from "next/image";
import Link from "next/link";


type Props = {
  products: Products[];
}

const Product = ({products} : Props) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
    return (
      <>
        <section className="lg:mx-auto lg:w-3/4 mx-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products?.map((product) => (
              <Link href={`/product/${product.productId}`} className="flex flex-col">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={`${baseUrl}/image/id/${
                      (product.images as string).split(",")[0]
                    }`}
                    alt=""
                    height={480}
                    width={480}
                    className="aspect-square object-cover rounded-lg object-center transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex ">
                    <span className="border p-1 rounded-full my-3">
                      {product?.metallicColor === "Vàng Chanh" && (
                        <Image
                          src={"/Type/type-gold.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      )}
                      {product?.metallicColor === "Vàng Trắng" && (
                        <Image
                          src={"/Type/type-silver.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      )}
                      {product?.metallicColor === "Vàng Hồng" && (
                        <Image
                          src={"/Type/type-rose.png"}
                          alt=""
                          height={100}
                          width={100}
                          className="aspect-square h-5 w-5"
                        />
                      )}
                    </span>
                  </div>
                  <div className="flex items-center font-bold text-sm">
                    <span className="line-clamp-1">{product.productName}</span>
                  </div>
                  <div className="text-xs py-2">{product.price}</div>
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="flex items-center justify-center my-10">
            <button className="border px-10 font-medium hover:text-white hover:bg-[#20475d] py-2 rounded-lg">
              Xem Thêm
            </button>
          </div> */}
        </section>
      </>
    );
}

export default Product;