import Carousel from "@/components/Carrousel";
import Story from "@/components/Story";
import { OUR_PETS, OUR_PETS_HISTORY } from "@/constants";

export default function OurPets() {
  return (
    <section className="max-container padding-container grid grid-cols-1 md:grid-cols-2 gap-5 py-10 pb-20 md:gap-2 lg:py-20 xl:flex-row">
      <Story title="Vores kæledyr" histories={OUR_PETS_HISTORY} />
      <Carousel images={OUR_PETS} />
    </section>
  );
}
