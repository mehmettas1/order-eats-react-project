import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";

const Search = ({setIsSearchModal}) => {
  return (
    <div className='position w-screen h-screen bg-black z-50 top-0 left-0' > 
         <OutsideClickHandler
    onOutsideClick={()=>setIsSearchModal(false)}>
    <div className="">
      <Title addClass="text-9xl" >Title</Title>
    </div>
  </OutsideClickHandler></div>
  )
}

export default Search