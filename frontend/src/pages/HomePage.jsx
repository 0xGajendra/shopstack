import { Button } from '@/components/ui/button';
import { Loader2, PackageIcon, Plus, RefreshCcwDot, RefreshCwIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import ProductCard from '@/components/ProductCard';
import AddProductModal from '@/components/AddProductModal';

const HomePage = () => {
    const {products, loading, error, fetchProducts} = useProductStore();

    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);

    console.log(products);
    

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <Button>
          <AddProductModal/>
        </Button>
        <Button onClick={fetchProducts} >
          <RefreshCwIcon className='size-5'/>
        </Button>
      </div>




      {error && <div>{error}</div>}

      {products?.length == 0 && !loading && (
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
          <div className="bg-base-100 rounded-full p-6">
            <PackageIcon className="size-12" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold ">No products found</h3>
            <p className="text-gray-500 max-w-sm">
              Get started by adding your first product to the inventory
            </p>
          </div>
        </div>
      )}


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
