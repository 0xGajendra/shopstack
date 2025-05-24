import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Plus } from 'lucide-react'
import { useProductStore } from '@/store/productStore'

const AddProductModal = () => {

    const {addProduct, formData, setFormData} = useProductStore();

    console.log(formData);
    
  return (
    <div>
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><Plus className='size-5 flex justify-center items-center'/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Product</DialogTitle>
          <DialogDescription>
            Enter the product Details You Want to Sell
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={addProduct}>
        <div className="grid gap-4 py-4">

            {/* Product Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Product Name
            </label>
            <Input id="name" value={formData.name} className="col-span-3" placeholder="Product Name" onChange={(e) => setFormData({ ...formData, name: e.target.value})}/>
          </div>

          {/* Product Price */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input id="price" value={formData.price} className="col-span-3" placeholder="Product Price" onChange={(e) => setFormData({ ...formData, price: e.target.value})}/>
          </div>

          {/* Product Image */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image URL
            </Label>
            <Input id="image" value={formData.image} className="col-span-3" placeholder="Product Image" onChange={(e) => setFormData({ ...formData, image: e.target.value})}/>
          </div>


        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddProductModal
