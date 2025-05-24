import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Trash2, Pencil } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useProductStore } from "@/store/productStore";

const ProductCard = ({ product }) => {

  const {deleteProduct} = useProductStore();
  return (
   <Card className="hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-2">
        <AspectRatio ratio={16 / 9}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="space-y-4 p-4">
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
        <p className="text-2xl font-bold text-primary">${Number(product.price).toFixed(2)}</p>

        <div className="flex justify-end gap-2">
          <Link to={`/product/${product.id}`}>
            <Button variant="outline" size="sm" className="text-primary hover:text-accent-foreground">
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => deleteProduct(product.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card> 
  );
};

export default ProductCard;
