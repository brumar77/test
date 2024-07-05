import Image from "next/image";

export const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        {/* <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 ">
          Its Time to take a break
        </p> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Det er tid til at tage en pause
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          {/* <h2 className="bold-40 bold-64 xl:max-w-[390px]">
            Tips and Suggestions to Enjoy Luxury in Nature
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Get ready for a renewed glamping experience with our comprehensive
            guide. From packing tips to activity recommendations, discover how
            to maximize your outdoor adventure with all the comfort and style.
            Follow our guide and transform your getaway into a luxurious and
            comfortable experience in the midst of nature.
          </p> */}

          <h2 className="bold-40 bold-64 xl:max-w-[390px]">
            Tips og forslag til at nyde luksus i naturen
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Gør dig klar til en fornyet glampingoplevelse med vores omfattende
            guide. Fra pakketips til aktivitetsanbefalinger, opdag hvordan du
            kan maksimere dit udendørseventyr med al komfort og stil. Følg vores
            guide og omdan din udflugt til en luksuriøs og komfortabel oplevelse
            midt i naturen.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  );
};
