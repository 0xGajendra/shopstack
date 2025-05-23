import { Button } from '@/components/ui/button';
import { Loader2, Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import ProductCard from '@/components/ProductCard';

const HomePage = () => {
    const {products, loading, error, fetchProducts} = useProductStore();

    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);

    console.log(products);
    

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <Button onClick={fetchProducts}>
          <Plus className='size-5'/>
        </Button>
      </div>

      {error && <div className=''>{error}</div>}

      {loading ? (
        <div className='flex justify-center items-center h-64'>
          
          <Loader2 className='animate-spin repeat-infinite'/>

      </div>): (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}

      </div>)}
      
    </div>
  )
}

export default HomePage
