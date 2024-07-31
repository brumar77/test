import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { SOCIALS } from "@/constants";

export const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <h1 className="bold-52 lg:bold-88">Glamping Mi casa, tu casa DK</h1>

        {/* <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Imagine waking up surrounded by the serenity of nature without giving
          up the comforts of luxury. We want to be part of each of your trips,
          offering unique and memorable glamping experiences. With our app, your
          next adventure full of glamour and nature is just a click away. Join
          our community of explorers and discover glamping like never before!
        </p> */}

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Oplev en unik glampingoplevelse i Danmark. Vi tilbyder luksuriøs
          indkvartering midt i naturen med alle moderne bekvemmeligheder. Book
          nu og få en uforglemmelig ferie
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            1.5k
            <span className="regular-16 lg:regular-20 ml-1">
            Fremragende anmeldelser
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Gå til Booking.com"
            variant="btn_booking_color"
            className="hover:opacity-80"
            href={SOCIALS.links[2].href}
          />

          {/* <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          /> */}
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-30">Location</p>
              <Image src="/close.svg" width={24} height={24} alt="close" />
            </div>
            <p className="bold-20 text-white">Vissenbjerg, 5492</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Country</p>
              <p className="bold-20 text-white">Denmark</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Island</p>
              <p className="bold-20 text-white">Fyn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
