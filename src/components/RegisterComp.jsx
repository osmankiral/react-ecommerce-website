import React from "react";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

const RegisterComp = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] mt-[1px]">
        <div className="max-w-xl mx-auto py-20 text-center ">
          <div className="bg-white p-4 rounded-md border-[1px]">
            <h1 className="text-3xl font-bold mb-3 text-[#142850]">
              Kayıt Olun
            </h1>
            <span className=" hover:text-blue-300 cursor-pointer underline">
              Hesabım var
            </span>
            <div className="mt-10 grid grid-cols-2 gap-5 px-7">
              <div className="col-span-1">
                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <AiFillFacebook size={24} />{" "}
                    <span className="my-auto ml-2">Facebook ile kayıt ol</span>
                  </a>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <AiFillGoogleSquare size={24} />{" "}
                    <span className="my-auto ml-2">Google ile kayıt ol</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mt-6 mx-7">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-md">
                <span className="bg-white px-2 text-gray-500">
                  Ya da devam edin
                </span>
              </div>
            </div>
            <form className="my-6 px-6 ">
              <input
                type="text"
                placeholder="İsim"
                className="border-[1px] w-full py-2 px-3 rounded-sm mt-2"
              />
              <input
                type="text"
                placeholder="Soyisim"
                className="border-[1px] w-full py-2 px-3 rounded-sm mt-2"
              />
              <input
                type="text"
                placeholder="Şifre"
                className="border-[1px] w-full py-2 px-3 rounded-sm mt-2"
              />
              <input
                type="text"
                placeholder="Tekrar Şifre"
                className="border-[1px] w-full py-2 px-3 rounded-sm mt-2"
              />
              <input
                type="text"
                placeholder="Email Adresi"
                className="border-[1px] w-full py-2 px-3 rounded-sm mt-2"
              />
              
              <button className="w-full mt-5 bg-[#142850] py-2 px-3 text-white rounded-sm hover:bg-slate-700">
                Kayıt Ol
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComp;
