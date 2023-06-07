import React from 'react'
import Title from '../ui/Title';
import Input from '../form/Input';

const Category = () => {
  return (
<div className="lg:p-8 flex-1 lg:mt-0 mt-5">
    
      <Title addClass="text-[40px]">Category</Title>
   <div className="">
    <div className="flex gap-4">
        <Input/>
        <button className="btn-primary">Add</button>
    </div>
   </div>
    </div>
  );
 
}

export default Category