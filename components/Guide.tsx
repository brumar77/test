import Image from "next/image";

export const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 ">
          Its Time to take a break
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 bold-64 xl:max-w-[390px]">
            Tips and Suggestions to Enjoy Luxury in Nature
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Get ready for a renewed glamping experience with our comprehensive
            guide. From packing tips to activity recommendations, discover how
            to maximize your outdoor adventure with all the comfort and style.
            Follow our guide and transform your getaway into a luxurious and
            comfortable experience in the midst of nature.
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
