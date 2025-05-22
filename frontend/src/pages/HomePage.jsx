import { useProductStore } from '../store/productStore'
import React, { useEffect } from 'react'

const HomePage = () => {
    const {products, loading, error, fetchProducts} = useProductStore();

    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <div className=''>
      
    </div>
  )
}

export default HomePage
