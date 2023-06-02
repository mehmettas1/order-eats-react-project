import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center mb-16">

        <Title className="text-[40px]">Our Menu</Title>
        <div className="mt-10">
            <button className='px-7 py-2 rounded-3xl text-white bg-secondary'>All</button>
            <button className='px-7 py-2 rounded-3xl  '>Burger</button>
            <button className='px-7 py-2 rounded-3xl  '>Pizza</button>
            <button className='px-7 py-2 rounded-3xl  '>Drink</button>

        </div>
        </div>
     
        <div className="mt-8 grid sm:grid-cols-2  md:grid-cols-3 gap-4 grid-cols-1">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            
        </div>
    </div>
  )
}

export default MenuWrapper