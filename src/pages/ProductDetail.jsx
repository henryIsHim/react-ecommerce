import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {

  let [product, setProduct] = useState(null);

  let { id } = useParams();

  let getProduct = async (id) => {
    let res = await fetch(`https://web-production-ed1b4.up.railway.app/api/products/` + id);
    let data = await res.json();
    setProduct(data.product);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);


  return (
    <>
      {product && (<div class="xl:px-32 sm:px-5 px-2">
        <div class="mt-10 flex md:flex-row flex-col xl:gap-10 gap-5">
          <div class="lg:basis-[65%] md:basis-[60%] overflow-hidden">
            <div class="flex lg:flex-row flex-col-reverse gap-5">
              <div class="basis-[10%] flex lg:flex-col flex-row gap-4">
                <div
                  class="w-full h-auto rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    class="w-full h-full group-hover:scale-[1.1] transition-all"
                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                  />
                </div>
                <div
                  class="w-full h-auto rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    class="w-full h-full group-hover:scale-[1.1] transition-all"
                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a777d6557d526b9dba47_image-12-shop-product-shopwave-template.png"
                  />
                </div>
                <div
                  class="w-full h-auto rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    class="w-full h-full group-hover:scale-[1.1] transition-all"
                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f697b6ea32fefb0084af2c_more-image-3-shop-product-shopwave-template.png"
                  />
                </div>
              </div>
              <div class="basis-[90%]">
                <div
                  class="w-full h-auto cursor-pointer group rounded-xl overflow-hidden"
                >
                  <img
                    class="w-full h-full group-hover:scale-[1.1] transition-all duration-200"
                    src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f697b6ea32fefb0084af2c_more-image-3-shop-product-shopwave-template.png"
                  />
                </div>
              </div>
            </div>
            <div class="w-full h-[1px] bg-black/10 my-16"></div>
            <div
              class="border-[1px] md:hidden block border-black/10 rounded-xl py-6 px-6"
            >
              <div
                class="inline-block px-3 py-1 bg-primary rounded-full text-white font-semibold text-sm"
              >
                {product.category.name}
              </div>
              <h1 class="text-2xl mt-3 font-medium">{product.name}</h1>
              <a
                href="#description"
                class="mt-2 text-[16px] mb-5 line-clamp-3 text-black/70 font-medium"
              >{product.description}</a
              >
              <div class="flex items-end mt-1 gap-2">
                <p class="font-bold text-2xl">{product.price} MMK</p>
              </div>
              <div class="my-8 h-[1px] w-full bg-black/20"></div>
              <p class="font-semibold text-lg">Product information</p>
              <div class="flex flex-col gap-2 mt-3">
                <div class="flex items-center">
                  <p class="basis-[35%] font-semibold">Category:</p>
                  <p class="basis-[65%] text-black/70">{product.category.name}</p>
                </div>
                <div class="flex items-center">
                  <p class="basis-[35%] font-semibold">Stock:</p>
                  <p class="basis-[65%] text-black/70">1000</p>
                </div>
              </div>
              <div class="my-8 h-[1px] w-full bg-black/20"></div>
              <div
                class="flex lg:items-center lg:flex-row flex-col gap-3 mt-4 mb-2"
              >
                <div class="lg:basis-[40%]">
                  <p class="font-bold mb-2">Quantity</p>
                  <input
                    class="w-full border-black/10 border-2 rounded-full py-3 pl-5"
                    type="number"
                    value="1"
                  />
                </div>
              </div>
              <button
                class="w-full h-full disabled:opacity-45 disabled:cursor-not-allowed text-white bg-primary rounded-full py-4 font-bold mt-3"
              >
                Add to Cart
              </button>
            </div>
            <div class="md:mt-0 mt-10">
              <div class="flex items-center justify-between">
                <h1 class="text-2xl font-semibold">Latest Products</h1>
                <a href="/home.html" class="text-sm text-primary underline"
                >View all</a
                >
              </div>
              <div class="grid lg:grid-cols-3 mb-10 mt-7 gap-3">
                <a class="h-min block" href="/productDetail.html">
                  <div
                    class="rounded-lg h-full flex lg:flex-col flex-row cursor-pointer hover:translate-y-[-10px] transition-all duration-200 group shadow-md hover:shadow-lg overflow-hidden"
                  >
                    <div class="w-full lg:w-full basis-[40%] overflow-hidden">
                      <img
                        src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                        class="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200"
                      />
                    </div>
                    <div class="py-4 lg:-w-full basis-[60%] px-6">
                      <p class="text-sm text-primary">Clothes</p>
                      <h1
                        class="mt-2 md:text-lg text-base line-clamp-1 font-bold group-hover:text-primary transition-all duration-200"
                      >
                        Product Name
                      </h1>
                      <div
                        class="flex xl:flex-row flex-col xl:items-center font-semibold mt-2 xl:gap-2"
                      >
                        <p class="text-primary">100000 MMK</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="h-min block" href="/productDetail.html">
                  <div
                    class="rounded-lg h-full flex lg:flex-col flex-row cursor-pointer hover:translate-y-[-10px] transition-all duration-200 group shadow-md hover:shadow-lg overflow-hidden"
                  >
                    <div class="w-full lg:w-full basis-[40%] overflow-hidden">
                      <img
                        src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                        class="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200"
                      />
                    </div>
                    <div class="py-4 lg:-w-full basis-[60%] px-6">
                      <p class="text-sm text-primary">Clothes</p>
                      <h1
                        class="mt-2 md:text-lg text-base line-clamp-1 font-bold group-hover:text-primary transition-all duration-200"
                      >
                        Product Name
                      </h1>
                      <div
                        class="flex xl:flex-row flex-col xl:items-center font-semibold mt-2 xl:gap-2"
                      >
                        <p class="text-primary">100000 MMK</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="h-min block" href="/productDetail.html">
                  <div
                    class="rounded-lg h-full flex lg:flex-col flex-row cursor-pointer hover:translate-y-[-10px] transition-all duration-200 group shadow-md hover:shadow-lg overflow-hidden"
                  >
                    <div class="w-full lg:w-full basis-[40%] overflow-hidden">
                      <img
                        src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                        class="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200"
                      />
                    </div>
                    <div class="py-4 lg:-w-full basis-[60%] px-6">
                      <p class="text-sm text-primary">Clothes</p>
                      <h1
                        class="mt-2 md:text-lg text-base line-clamp-1 font-bold group-hover:text-primary transition-all duration-200"
                      >
                        Product Name
                      </h1>
                      <div
                        class="flex xl:flex-row flex-col xl:items-center font-semibold mt-2 xl:gap-2"
                      >
                        <p class="text-primary">100000 MMK</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="w-full h-[1px] bg-black/10 my-16"></div>
            <div>
              <h1 class="text-2xl font-semibold">Product information</h1>
              <div class="mt-4" id="description">
                <p class="text-lg text-black/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  dolorem facere veniam, esse iusto itaque architecto, a quis
                  cupiditate beatae quam aspernatur, dolores sint corrupti
                  similique ullam autem eveniet ea tenetur ut? Itaque molestias
                  quod similique laborum aliquid. Atque similique expedita tempora
                  est commodi distinctio sequi ipsum ducimus doloremque beatae!
                </p>
              </div>
            </div>
            <div class="w-full h-[1px] bg-black/10 my-16"></div>
            <div class="my-16">
              <h1 class="text-2xl font-semibold">Shipping Information Updated</h1>
              <p class="text-lg text-black/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit viverra sit semper lorem
                eu cursus vel hendrerit elementum morbi curabitur etiam nibh
                justo, lorem aliquet donec sed sit mi dignissim at ante massa
                mattis. Viverra aliquet eget sit amet tellus cras. Cursus sit amet
                dictum sit amet. Diam donec adipiscing tristique risus nec. Diam
                donec adipiscing tristique risus nec feugiat in. Quisque egestas
                diam in arcu cursus euismod quis viverra nibh. Quis imperdiet
                massa tincidunt nunc.
              </p>
            </div>
          </div>
          <div class="lg:basis-[35%] md:basis-[40%]">
            <div
              class="border-[1px] md:block hidden border-black/10 rounded-xl py-6 px-6"
            >
              <div
                class="inline-block px-3 py-1 bg-primary rounded-full text-white font-semibold text-sm"
              >
                {product.category.name}
              </div>
              <h1 class="text-2xl mt-3 font-medium">{product.name}</h1>
              <a
                href="#description"
                class="mt-2 text-[16px] mb-5 text-black/70 line-clamp-3 font-medium"
              >{product.description}</a
              >
              <div class="flex items-end mt-1 gap-2">
                <p class="font-bold text-2xl">{product.price} MMK</p>
              </div>
              <div class="my-8 h-[1px] w-full bg-black/20"></div>
              <p class="font-semibold text-lg">Product information</p>
              <div class="flex flex-col gap-2 mt-3">
                <div class="flex items-center">
                  <p class="basis-[35%] font-semibold">Category:</p>
                  <p class="basis-[65%] text-black/70">{product.category.name}</p>
                </div>
              </div>
              <div class="my-8 h-[1px] w-full bg-black/20"></div>
              <div
                class="flex lg:items-center lg:flex-row flex-col gap-3 mt-4 mb-2"
              >
                <div class="lg:basis-[40%]">
                  <p class="font-bold mb-2">Quantity</p>
                  <input
                    class="w-full border-black/10 border-2 rounded-full py-3 pl-5"
                    type="number"
                    value="1"
                  />
                </div>
              </div>
              <button
                class="w-full h-full disabled:opacity-45 disabled:cursor-not-allowed text-white bg-primary rounded-full py-4 font-bold mt-3"
              >
                Add to Cart
              </button>
            </div>
            <div class="mt-12">
              <div class="flex items-center justify-between mb-7">
                <h1 class="text-2xl font-medium">Related Product</h1>
                <a href="/home.html" class="text-sm text-primary underline"
                >View all</a
                >
              </div>
              <div class="flex flex-col gap-7">
                <a href="/productDetail.html">
                  <div class="flex items-center gap-5 group cursor-pointer">
                    <div class="basis-[30%] h-auto rounded-xl overflow-hidden">
                      <img
                        class="w-full h-full group-hover:scale-[1.1] transition-all duration-200 object-cover"
                        src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                      />
                    </div>
                    <div class="basis-[70%]">
                      <p
                        class="text-lg group-hover:text-primary transition-all duration-200 font-semibold"
                      >
                        Product Name
                      </p>
                      <div class="flex items-center gap-2">
                        <p class="font-bold">100000 MMK</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/productDetail.html">
                  <div class="flex items-center gap-5 group cursor-pointer">
                    <div class="basis-[30%] h-auto rounded-xl overflow-hidden">
                      <img
                        class="w-full h-full group-hover:scale-[1.1] transition-all duration-200 object-cover"
                        src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                      />
                    </div>
                    <div class="basis-[70%]">
                      <p
                        class="text-lg group-hover:text-primary transition-all duration-200 font-semibold"
                      >
                        Product Name
                      </p>
                      <div class="flex items-center gap-2">
                        <p class="font-bold">100000 MMK</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/productDetail.html">
                  <div class="flex items-center gap-5 group cursor-pointer">
                    <div class="basis-[30%] h-auto rounded-xl overflow-hidden">
                      <img
                        class="w-full h-full group-hover:scale-[1.1] transition-all duration-200 object-cover"
                        src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                      />
                    </div>
                    <div class="basis-[70%]">
                      <p
                        class="text-lg group-hover:text-primary transition-all duration-200 font-semibold"
                      >
                        Product Name
                      </p>
                      <div class="flex items-center gap-2">
                        <p class="font-bold">100000 MMK</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[1px] bg-black/10 mt-16"></div>
      </div>)}
    </>
  )
}

