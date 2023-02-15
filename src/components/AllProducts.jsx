import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://dummyjson.com/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner mx-auto my-10"></div>
      ) : (
        <div className="max-w-7xl mx-auto mt-6">
          <div className="grid grid-cols-12">
            {products.products?.map((product) => (
              <div key={product.id} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mx-auto border-[1px] h-80 w-64 rounded-lg mb-10 relative ">
                <div className="border-b-[1px]">
                  <img
                    className="rounded-t-lg h-36 w-full"
                    src={product.thumbnail}
                    alt=""
                  />
                </div>
                <div className="text-lg font-semibold text-center mt-2 ">
                  {product.title}
                </div>
                <div className="text-base truncate text-center mt-2 text-gray-400">
                  {product.description}
                </div>
                <div className="flex justify-between px-3 inset-x-0 bottom-0 absolute mb-3">
                  <div className="text-[#ff914d] text-lg font-bold">
                    {(product.price * 18.6).toFixed(2)} TL
                  </div>
                  <div>
                    <button className="bg-[#ff914d] text-white py-1 px-3 rounded-lg hover:bg-white hover:text-[#ff914d] hover:border-[1px] hover:border-[#ff914d]">
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;
