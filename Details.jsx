import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';


const Details = () => {
  const [product,setProduct] = useState(null);
  const {id} = useParams();
  const getSingleproduct = async()=>{
    try {
      const {data} = await axios.get(`/products/${id}`)
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getSingleproduct();
  },[])
  return product?(
    <div className='p-[10%] w-[70%] flex justify-between items-center h-full m-auto'>
      <img className="mr-5 object-contain  w-[40%]" src={`${product.image}`} alt=''/>
      <div className='content w-[40%] '>
        <h1 className='text-4xl'>{product.title}</h1>
        <h2 className='text-zinc-800'>{product.category}</h2>
        <h2>{product.price}</h2>
        <p className='mb-5'>{product.description}</p>
        <Link className="py-1 mr-3 px-5 border rounded border-blue-200 text-blue-500">Edit</Link>
        <Link className="py-1 px-5 border rounded border-blue-200 text-red-500">Delete</Link>
      </div>
    </div>
  ):<Loading/>
}

export default Details
