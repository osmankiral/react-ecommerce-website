import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineLogin,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineSkin,
  AiOutlineTag,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
//#ff914d
const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="pb-4 border-b-[1px] bg-white header top-0 sticky z-50 hidden lg:block">
        <div className="max-w-7xl mx-auto gap-3 mt-3 ">
          <div className="grid grid-cols-12 ">
            <Link to="/" className="col-span-4">
              <img className="mx-auto cursor-pointer" src={logo} alt="" />
            </Link>
            <div className="col-span-4 mx-auto ">
              <form>
                <div className="relative">
                  <AiOutlineSearch
                    size={28}
                    className="absolute mt-[23px] ml-44 cursor-pointer"
                    color="#ff914d"
                  />
                  <input
                    type="text"
                    name="search"
                    autoComplete="off"
                    placeholder="Ara..."
                    className="border-[1px] bg-gray-50 rounded-lg py-2 pl-5 pr-3 w-full placeholder-gray-500 mt-4 "
                  />
                </div>
              </form>
            </div>
            <div className="col-span-4 flex gap-10">
              <div className="flex my-auto gap-1 text-black hover:text-[#ff914d] cursor-pointer">
                <AiOutlineLogin size={24} />
                <Link
                  to="/giris"
                  className="text-sm font-semibold mr-10 my-auto "
                >
                  Giriş Yap
                </Link>
                <span className="border-r-[1px] "></span>
              </div>
              <div className="flex my-auto  gap-1 text-black hover:text-[#ff914d] cursor-pointer">
                <AiOutlineUserAdd size={24} />
                <Link
                  to="/kayit"
                  className="text-sm font-semibold mr-10 my-auto"
                >
                  Kayıt Ol
                </Link>
                <span className="border-r-[1px] "></span>
              </div>
              <Link
                to="/sepet"
                className="flex my-auto relative items-center cursor-pointer text-black hover:text-[#ff914d]"
              >
                <AiOutlineShoppingCart size={24} className="absolute" />
                <span className="rounded-full bg-[#ff914d] text-xs px-1 ml-6 mb-4 text-white">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header className=" bg-white shadow-md items-center justify-between px-8 py-02 hidden lg:block">
        <nav className="nav font-semibold text-lg mx-auto">
          <ul className="flex items-center justify-center">
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer active">
              <NavLink to="/">Tümü</NavLink>
            </li>
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer active">
              <NavLink to="/smartphones">Akıllı Telefon</NavLink>
            </li>
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer">
              <NavLink to="/laptops">Laptop</NavLink>
            </li>
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer">
              <NavLink to="/fragrances">Parfüm</NavLink>
            </li>
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer">
              <NavLink to="/skincare">Cilt Bakımı</NavLink>
            </li>
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer">
              <NavLink to="/groceries">Market</NavLink>
            </li>
            <li className="p-4 border-b-2 border-[#ff914d] border-opacity-0 hover:border-opacity-100 hover:text-[#ff914d] duration-200 cursor-pointer">
              <NavLink to="/home-decoration">Ev Dekorasyonu</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {open ? (
        <div className="block lg:hidden m-5 z-10">
          <div className="bg-white shadow-md border-t-[1px] overflow-hidden tracking-[1px] origin-rigth duration-1000">
            <div className="flex justify-between px-8 py-3 border-b-[1px]">
              <img className="cursor-pointer h-10" src={logo} alt="das" />
              <AiOutlineClose
                size={32}
                className="mt-1"
                onClick={() => setOpen(false)}
              />
            </div>
            <ul className="font-semibold w-full px-8">
              <Link to="/" onClick={() => setOpen(false)}>
                <li className="p-3 flex gap-3">
                  <AiOutlineHome size={22} color="#ff914d" /> TÜMÜ
                </li>
              </Link>
              <Link to="/smartphones" onClick={() => setOpen(false)}>
                <li className="p-3  border-t-[1px] flex gap-3">
                  <GiSmartphone size={22} color="#ff914d" /> AKILLI TELEFON
                </li>
              </Link>
              <Link to="/laptops" onClick={() => setOpen(false)}>
                <li className="p-3  border-t-[1px] flex gap-3">
                  <AiOutlineLaptop size={22} color="#ff914d" /> LAPTOP
                </li>
              </Link>
              <Link to="/fragrances" onClick={() => setOpen(false)}>
                <li className="p-3 border-t-[1px] flex gap-3">
                  <AiOutlineTag size={22} color="#ff914d" /> PARFÜM
                </li>
              </Link>
              <Link to="/skincare" onClick={() => setOpen(false)}>
                <li className="p-3  border-t-[1px] flex gap-3">
                  <AiOutlineSkin size={22} color="#ff914d" /> CİLT BAKIMI
                </li>
              </Link>
              <Link to="/groceries" onClick={() => setOpen(false)}>
                <li className="p-3  border-t-[1px] flex gap-3">
                  <AiOutlineShoppingCart size={22} color="#ff914d" /> MARKET
                </li>
              </Link>
              <Link to="/home-decoration" onClick={() => setOpen(false)}>
                <li className="p-3  border-t-[1px] flex gap-3">
                  <BiBed size={22} color="#ff914d" /> EV DEKORASYONU
                </li>
              </Link>
            </ul>
            <div className="h-3 bg-gray-100"></div>
            <ul className="font-semibold w-full px-8">
              <Link to="/giris" onClick={() => setOpen(false)}>
                <li className="p-3 flex gap-3">
                  <AiOutlineLogin size={22} className="text-gray-400" /> Giriş
                  Yap
                </li>
              </Link>
              <Link to="/kayit" onClick={() => setOpen(false)}>
                <li className="p-3 flex gap-3 border-t-[1px]">
                  <AiOutlineUserAdd size={22} className="text-gray-400" /> Kayıt
                  Ol
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        <div className="block lg:hidden">
          <div className="bg-white shadow-md items-center justify-between px-8  flex origin-top duration-1000 ">
            <div className="flex">
              <AiOutlineMenu
                className="my-4"
                size={32}
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="flex gap-5 mt-1 justify-end">
              <AiOutlineLogin size={28} />
              <AiOutlineUserAdd size={28} />
              <AiOutlineShoppingCart size={28} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
