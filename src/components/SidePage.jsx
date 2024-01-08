import React from "react";

const SidePage = () => {
  return (
    <div class=" w-64 bg-[#222222] fixed p-8 h-full border-r border-[#393939] z-10">
      <div className="text-xl mt-14 pl-4 uppercase font-bold top-0 text-text-black-900 py-15 px-3 tracking-wider relative">
        <div className="content-[] absolute w-5 h-5 border-t-[#ec1839] border-r-[#ec1839] border-r-[5px] border-t-[5px] border-solid -right-2 -top-2"></div>
        <a href="">Daniel Jemmo</a>
        <div className="content-[] absolute w-5 h-5 border-b-[#ec1839] border-l-[#ec1839] border-l-[5px] border-b-[5px] border-solid -left-2 -bottom-2"></div>
      </div>
      <div className="flex justify-center mt-24 font-semibold">
        <ul>
          <li className="mb-6 text-[#ec1839]">
            <i class="fa fa-home pr-4 pb-2"></i>
            <a href="">Home</a>
            <hr className="border-[#393939]" />
          </li>
          <li className="mb-6">
            <i class="fa fa-user pr-4 pb-2"></i>
            <a href="">About</a>
            <hr className="border-[#393939]" />
          </li>
          <li className="mb-6">
            <i class="fa fa-list pr-4 pb-2"></i>
            <a href="">Service</a>
            <hr className="border-[#393939]" />
          </li>
          <li className="mb-6">
            <i class="fa fa-briefcase pr-4 pb-2"></i>
            <a href="">Profile</a>
            <hr className="border-[#393939]" />
          </li>
          <li className="mb-6">
            <i class="fa fa-comments pr-4 pb-2"></i>
            <a href="">Contact</a>
            <hr className="border-[#393939]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePage;
