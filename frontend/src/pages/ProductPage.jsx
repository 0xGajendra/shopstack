import { useProductStore } from '@/store/productStore'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';

const ProductPage = () => {

  const {currentProduct, formData, setFormData, loading, error, fetchProduct, updateProduct, deleteProduct} = useProductStore();

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=> {
    fetchProduct(id)
  },[fetchProduct, id])

  console.log(currentProduct);
  

  return (
    <div className='text-5xl text-white'>ProductPage</div>
  )
}

export default ProductPage