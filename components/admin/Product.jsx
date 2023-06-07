import Title from "../ui/Title";
import Image from "next/image";

const Product = () => {
  return (
    <div className="lg:p-8 lg:mt-0 mt-5 flex-1">
      <Title addClass="text-[40px]">Products</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRİCE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 cursor-pointer hover:bg-primary ">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                <Image src="/images/f1.png" width={50} height={50} alt="" />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                A564564654
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
               GooD Pizza
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-danger">Delete</button>
              </td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
