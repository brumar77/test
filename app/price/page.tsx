import { Product } from "@/components/Product/Product";

import { BASICPRODUCTS } from "@/constants";


export default function ProductPage() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <Product products={BASICPRODUCTS} />
    </section>
  );
}


