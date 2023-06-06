import Image from "next/image";
import React from "react";

const CustomerItem = ({imgSrc}) => {
  return (
    <div className="mt-5">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est
          eaque quos dolore, labore culpa pariatur non dolorum natus explicabo
          placeat impedit aliquid?
        </p>

        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold ">Moana Michell</span>
          <span className="text-[15px]">magna aliqua</span>
        </div>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-['']  before:absolute before:top-0 flex justify-center before:bg-primary before:w-5 before:h-5 before:-translate-y-3 before:rotate-45 ">
        <Image
          src={imgSrc}
          layout="fill"
          alt=""
          objectFit="contain"
          className="rounded-full "
        />
      </div>
    </div>
  );
};

export default CustomerItem;
