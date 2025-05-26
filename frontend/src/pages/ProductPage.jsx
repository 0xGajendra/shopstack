import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProductStore } from "@/store/productStore";
import {
  ArrowLeftIcon,
  Loader,
  Loader2,
  SaveAllIcon,
  TrashIcon,
} from "lucide-react";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";

const ProductPage = () => {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  console.log(currentProduct);

  const handleDelete = async () => {
    if(window.confirm("Do you really want to delete this product??")){

      await deleteProduct(id);
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="size-20 animate-spin repeat-infinite" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-5xl text-foreground">{error}</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" asChild>
        <Link to="/">
          <ArrowLeftIcon className="size-4 mr-2" />
          Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40">
        {/* Product IMAGE */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-black">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.name}
            className="size-full object-cover"
          />
        </div>

        {/* Product form */}
        <div className="bg-background rounded-2xl border-2 p-5 shadow-lg">
          <h2 className="text-2xl text-center mb-6">Edit Product</h2>
          <form
            onSubmit={async(e) => {
              e.preventDefault();

              await updateProduct(id);
            }}
            className="space-y-6"
          >
            {/* PRODUCT NAME */}
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="text"
              placeholder="Enter product name"
              className="w-full"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* PRODUCT PRICE  */}

            <Label htmlFor="price">Product Price</Label>
            <Input
              type="text"
              placeholder="Enter product price"
              className="w-full"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />

            {/* PRODUCT IMAGE URL */}

            <Label htmlFor="image">Product Image URL</Label>
            <Input
              type="text"
              placeholder="Enter product image URL"
              className="w-full"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />

            {/* FORM ACTIONS */}

            <div className="flex justify-between mt-8">
              <Button
                type="button"
                onClick={handleDelete}
                variant="destructive"
              >
                <TrashIcon className="size-5 mr-2" /> Delete Product
              </Button>

              <Button
                type="submit"
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.price ||
                  !formData.image
                }
              >
                {loading ? (
                  <Loader className="animate-spin repeat-infinite" />
                ) : (
                  <>
                    <SaveAllIcon className="size-5 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
