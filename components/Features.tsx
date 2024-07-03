import { FEATURES } from "@/constants";
import Image from "next/image";

export const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-28">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 ">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/camp.svg" alt="camp" width={50} height={50} />
            <h2 className="bold-40 lg:bold-64">Faciliteter</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:mg-20 lg:gap-10">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-2 lg:p-4 bg-green-50">
        <Image src={icon} alt="map" width={20} height={20} />
      </div>
      <h2 className="bold-16 lg:bold-24 mt-5 capitalize">{title}</h2>
      <p className="regular-14 mt-3 text-gray-30 lg:mt-5 lg:bg-none">
        {description}
      </p>
    </li>
  );
};
