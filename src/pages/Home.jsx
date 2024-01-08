import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex place-items-center lg:ml-72 py-24 min-h-full max-w-5xl font-league">
      <div className="w-3/5 ml-auto">
        <h1 className="my-6 text-3xl font-bold text-gray-400">
          Hello, I Am <span className="text-[#ec1839]">Daniel Jemmo</span>
        </h1>
        <h1 className="my-6 text-3xl font-bold text-[#ec1839]">
          <span className=" text-gray-400">I AM</span> Website Devloper
        </h1>
        <p className="mb-16 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quis
          necessitatibus. Reiciendis, perferendis qui fugiat mollitia aperiam
          doloribus fuga, a illum est obcaecati velit, ipsa modi eveniet laborum
          molestiae praesentium?
        </p>
        <Button title="More About Me" />
      </div>
      <div className="m-auto w-1/4 relative text-center">
        <div className="content-[] absolute h-20 w-20 border-t-[#ec1839] border-l-[#ec1839] border-l-[10px] border-t-[10px] border-solid -left-20 -top-14"></div>
        <img src="../public/profile.jpg" alt="image" className="rounded-lg"/>
        <div className="content-[] absolute h-20 w-20 border-b-[#ec1839] border-r-[#ec1839] border-r-[10px] border-b-[10px] border-solid -right-16 -bottom-14"></div>
      </div>
    </div>
  );
}
