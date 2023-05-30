import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";

const Search = ({setIsSearchModal}) => {
  return (
    <div className='fixed w-screen h-screen  z-50 after:content-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0  grid place-content-center' > 
         <OutsideClickHandler
    onOutsideClick={()=>setIsSearchModal(false)}>
   <div className="w-full h-full grid place-content-center">
   <div className="relative w-[37rem] h-[37rem] z-50 bg-white border-2">
      <Title addClass="text-5xl text-center" >Search</Title>
    </div>
   </div>
  </OutsideClickHandler></div>
  )
}

export default Search