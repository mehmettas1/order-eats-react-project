import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import {GiCancel} from "react-icons/gi";

const Search = ({setIsSearchModal}) => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0  z-50 after:content-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60  grid place-content-center' > 
         <OutsideClickHandler
    onOutsideClick={()=>setIsSearchModal(false)}>
   <div className="w-full h-full grid place-content-center">
   <div className="relative w-[37rem] h-[37rem] z-50 bg-white border-2">
      <Title addClass="text-5xl text-center" >Search</Title>
      <input type="text" placeholder='Search ...' className='border w-full my-10'  />
      <div className="">
        <ul className='mt-10'>
            <li className='flex items-center justify-between hover:bg-primary p-1 transition-all '>
                <div className="relative flex">
                    <Image src="/images/f1.png" width={48} height={48} alt=""  />
                </div>
                    <span className='font-bold'>Good Pizza</span>
                    <span className='font-bold'>$10</span>
            </li>
            <li className='flex items-center justify-between hover:bg-primary p-1 transition-all '>
                <div className="relative flex">
                    <Image src="/images/f1.png" width={48} height={48} alt=""  />
                </div>
                    <span className='font-bold'>Good Pizza</span>
                    <span className='font-bold'>$10</span>
            </li>
            <li className='flex items-center justify-between hover:bg-primary p-1 transition-all '>
                <div className="relative flex">
                    <Image src="/images/f1.png" width={48} height={48} alt=""  />
                </div>
                    <span className='font-bold'>Good Pizza</span>
                    <span className='font-bold'>$10</span>
            </li>
        </ul>
        <button className="absolute top-0 right-0"onClick={()=>setIsSearchModal(false)}>
        <GiCancel size={25} className='hover:text-primary transition-all'/>
        </button>
      </div>
    </div>
   </div>
  </OutsideClickHandler></div>
  )
}

export default Search