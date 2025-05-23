
import { Edit } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-accent rounded-lg p-5 ">
      {/* PRODUCT IMAGE */}
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="top-0 left-0 w-48 h-36 object-cover rounded-lg hover:scale-105 transition-all duration-300 cursor-grab"
        />
      </figure>
      <div className="">
        {/* PRODUCT INFO */}
        <h2 className="text-lg font-semibold ">{product.name}</h2>
        <p className="text=2xl font-bold text-primary">
          ${Number(product.price).toFixed(2)}
        </p>
        {/* CARD ACTIONS */}
        <div className="flex justify-end mt-4 gap-2">
          <Button asChild variant="outline">
            <Link href={`/products/${product.id}`}>
            <Edit className="size-4" /></Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={``} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
