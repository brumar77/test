"use client";

import { Button } from "../Button";
import Carousel from "../Carrousel";
import { ProductImage } from "./ProductImage";
import { ProductInformation } from "./ProductInformation";

type ImagesProps = {
  src: string,
  alt: string
};

type ProductItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: ImagesProps[];
  price: number;
  availableRoom: boolean;
  limitPersonForRoom: number;
  porcentageForMorePersons: number;
  bathroom: {
    title: string;
    description: string;
  };
};

type ProductProps = {
  products: ProductItem[];
};

export const Product = ({ products }: ProductProps) => {
  return (
    <div className="grid gap-6 grid-cols-1">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="bg-white/30 gap-3 shadow-2xl rounded-3xl overflow-hidden mx-4 lg:flex lg:items-center"
          >
            {product.image && (
              <div className="mx-3 my-3 w-full lg:w-1/2 md:flex md:justify-center">
                {/* Renderiza el carrusel de imágenes aquí */}
                <Carousel images={product.image} showButtons={true} />
              </div>
            )}

            <div className="p-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
              <ProductInformation
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                price={product.price}
              />

              <Button
                type="button"
                title="Reserve Now"
                variant="btn_champagne_hard"
                full
              />
            </div>

          </div>
        ))
      ) : (
        <h3 className="text-center mt-8">No existen productos</h3>
      )}
    </div>
  );
};