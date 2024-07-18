"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {

  const [randomPeople, setRandomPeople] = useState<string[]>([]);

  useEffect(() => {
    const shuffledPeople = [...PEOPLE_URL].sort(() => Math.random() - 0.5);
    setRandomPeople(shuffledPeople);
  }, []);

  return (
    <div
      className={`h-full w-full min-w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {randomPeople.map((url, index) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={url}
                src={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-4 overflow-x-auto sm:gap-6 md:gap-8 sm:h-[360px] md:h-[380px] lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          // backgtoundImage="./price/glamping-in-denmark-mi-casa-tu-casa-best-price-2.jpg"
          title="MiCasaTuCasa"
          subtitle="Exclusive"
          peopleJoined="100+ Joined"
        />

        <CampSite
          backgroundImage="bg-bg-img-2"
          title="MiCasaTuCasa"
          subtitle="Exclusive"
          peopleJoined="100+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          {/* <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> and not Knowing the way?
          </h2> */}
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Føler du dig fortabt</strong> og ved ikke vejen?
          </h2>

          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Leder du efter en perfekt flugt for at afbryde fra daglig stress og
            genoprette forbindelsen til naturen? Vores glamping tilbyder den
            ideelle kombination af luksus og ro i smukke landskaber. Forestil
            dig at vågne op til lyden af fugle og den blide hvisken fra en
            nærliggende bæk, mens du nyder komforten af en luksusseng og alle
            moderne bekvemmeligheder. På vores glamping er hver detalje designet
            til at give dig en unik og afslappende oplevelse.
          </p>
          <Image
            className="camp-quote"
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  );
};
