"use client";

import Carousel from "../Carrousel";

type ImagesProps = {
  src: string,
  alt: string
};

type ProductImageProps = {
  allImages: ImagesProps[];
};

export const ProductImage = ({ allImages }: ProductImageProps) => {
  return (
    <>
      {allImages.length > 0
        ?
        <Carousel images={allImages} showButtons />





        // ? allImages.map((image) => (
        //     <Image
        //       key={image}
        //       src={image}
        //       alt={image}
        //       width={500}
        //       height={500}
        //       className="max-w-full h-auto rounded-3xl"
        //     />
        //   ))
        : null}
    </>
  );
};
