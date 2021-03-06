import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllInventory = ({product, handleDelete}) => {
    const { _id, supplier,Discriptions , name, image, price } = product;
    return (
      <div className="border-gray-300 text-left border-2 mb-10 rounded-lg p-4">
        <img className="w-50 mx-auto" src={image} alt="" />
        <h6 className="text-blue-800 font-bold mt-3">{name}</h6>
        <p>Price:$ {price}</p>
        <p>{Discriptions?.slice(0,70)}...</p>
        <p className="text-blue-500">Supplier: {supplier}</p>
        <div className='flex justify-between'>
        <Link to={`/product/${_id}`} className="px-4 no-underline mt-3 py-2 rounded-full hover:bg-blue-800 duration-300 bg-blue-500 text-white">
          Update
        </Link>
        <button onClick={()=>handleDelete(_id)} className="px-4 mt-3 py-2 rounded-full hover:bg-blue-800 duration-300 bg-blue-500 text-white">
          Delete
        </button>
        </div>
      </div>
    );
};

export default AllInventory;