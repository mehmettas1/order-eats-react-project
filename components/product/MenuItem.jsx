import Image from 'next/image'
import { RiShoppingCart2Fill } from "react-icons/ri";
const MenuItem = () => {
  return (
<div className="bg-secondary rounded-3xl">
  <div className="w-full bg-[#f1f2f3] h-52 grid place-content-center rounded-bl-[46px] rounded-tr-2xl rounded-tl-2xl">
  <div className="relative  w-36 h-36 hover:scale-105 transition-all ">
        <Image className=' ' src="/images/f1.png" alt='' layout='fill'/>
    </div>
  </div>
    <div className="text-white p-6 ">
        <h4 className='text-xl font-semibold'>Delicious Pizza</h4>
        <p className=" text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores harum officia autem doloremque .</p>
        <div className="flex justify-between ">

        <span className='text-white' >$20</span>
        <button className=" btn-primary h-10 w-10 rounded-full p-0  grid place-content-center"><RiShoppingCart2Fill/></button>
  </div>
    </div>
</div>
  )
}

export default MenuItem