import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartComp = () => {
  return (
    <>
      <div className="bg-[#F7FAFC] pt-16 pb-40">
        <div className="grid grid-cols-12 max-w-7xl mx-auto shadow-lg border-[1px] ">
          <div className="col-span-8 bg-white py-10 ">
            <div className="flex justify-between font-semibold text-xl pb-5 border-b-[1px] px-10">
              <h4>Alışveriş Sepeti</h4>
              <h4>2 Ürün</h4>
            </div>
            <div className="mt-5 hover:rounded-md py-5">
              <div className="flex px-8 mx-2 justify-between hover:bg-[#F7FAFC] ">
                <div className="flex ">
                  <img
                    src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                    className="h-32 w-32 py-2 px-4"
                    alt="images"
                  />
                  <div className="ml-8">
                    <h5 className="font-bold mt-2">Iphone 6S</h5>
                    <p className="text-gray-600 text-base mt-5">Apple</p>
                    <p className="text-red-600 text-base mt-5 hover:text-red-300 cursor-pointer">
                      Sepetten Çıkar
                    </p>
                  </div>
                </div>
                <div className="my-auto flex text-lg">
                  <AiOutlineMinus className="mt-1.5 mr-2 cursor-pointer" />
                  <p className="border-[2px] px-2">1 </p>
                  <AiOutlinePlus className="mt-1.5 ml-2  cursor-pointer" />
                </div>
                <div className="text-lg my-auto font-bold">12000,00 TL</div>
              </div>
              <div className="flex px-8 mx-2 justify-between mt-5 hover:bg-[#F7FAFC]">
                <div className="flex ">
                  <img
                    src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                    className="h-32 w-32 py-2 px-4 "
                    alt="images"
                  />
                  <div className="ml-8">
                    <h5 className="font-bold mt-2">MacBook Pro</h5>
                    <p className="text-gray-600 text-base mt-5">Apple</p>
                    <p className="text-red-600 text-base mt-5 hover:text-red-300 cursor-pointer">
                      Sepetten Çıkar
                    </p>
                  </div>
                </div>
                <div className="my-auto flex text-lg">
                  <AiOutlineMinus className="mt-1.5 mr-2 cursor-pointer" />
                  <p className="border-[2px] px-2">1 </p>
                  <AiOutlinePlus className="mt-1.5 ml-2  cursor-pointer" />
                </div>
                <div className="text-lg my-auto font-bold">32531.40 TL</div>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-[#F6F6F6] pt-10 px-8">
            <div>
              <p className="text-xl font-semibold mb-5">Sipariş Özeti</p>
            </div>
            <div className=" justify-between flex pb-5 border-b-[1px]">
              <p className="text-md text-gray-500 mt-5">Ara Toplam</p>
              <p className="text-md font-semibold mt-5">44531.00 TL</p>
            </div>
            <div className=" justify-between flex pb-5 border-b-[1px]">
              <p className="text-md text-gray-500 mt-5">KDV Toplam</p>
              <p className="text-md font-semibold mt-5">8015.00 TL</p>
            </div>
            <div className=" justify-between flex pb-5 ">
              <p className="text-lg font-semibold  mt-5">Sipariş Toplamı</p>
              <p className="text-md font-semibold mt-5">52546.58 TL</p>
            </div>
            <div>
              <button className="w-full bg-[#ff914d] hover:bg-orange-500 py-3 text-white mt-8 rounded-md">
                Ödemeye Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComp;
