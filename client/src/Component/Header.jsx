import React from "react";
import logo from "../assets/logo.png";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className=" border border-slate-300">
      <Container className=" px-4 py-6 text-2xl flex justify-between items-center ">
        <img src={logo} alt="" />

        <SearchInput />

        <div className=" hidden md:flex gap-3 text-lightText">
          <div>navlink</div>

          <div className=" flex gap-3 items-center">
            <p>
              <FaRegUserCircle />
            </p>
            <p>
              <IoCartSharp />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
