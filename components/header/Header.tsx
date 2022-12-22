import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
function Header() {
  const [nav, setNav] = useState(false);
  const hendleNav = () => {
    setNav(!nav);
  };
  return (
    <header>
      <div className="fixed w-full h-20 shadow-xl">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image
            src={logo.src}
            alt="Image"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
          <ul className="hidden space-x-4 md:flex ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV Show</li>
            <li className="cursor-pointer">Movices</li>
            <li className="cursor-pointer">New & Popular</li>
            <li className="cursor-pointer">My List</li>
          </ul>
          <div onClick={hendleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className={nav ? "fixed left-0 top-0 w-full h-screen" : ""}>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-0 top-0  p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex justify-between items-center w-full">
                <Image
                  src={logo.src}
                  alt="Image"
                  width={100}
                  height={100}
                  className="cursor-pointer object-contain"
                />
                <div
                  onClick={hendleNav}
                  className="rounded-full shadow-lg shadow-gray-400 cursor-pointer"
                >
                  <IoMdClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-300 ">
                <p className="w-[85%] md:w-[90%] py-4 text-black">
                  Lets build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase text-black">
                {/* <Link href="/"> */}
                <li className="py-4 text-sm" onClick={() => alert("sdsdsd")}>
                  Home
                </li>
                {/* </Link> */}
                <Link href="/">
                  <li className="py-4 text-sm">TV Show</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Movices</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">New & Popular</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">My List</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
