import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import { SOCIALS } from "@/constants";

export const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          {/* <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>
            Get info Now!
          </h2>
          <p className='regular-16 text-gray-10'>
            Comunicate with our staffs and get more information
          </p> */}
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Få information nu!
          </h2>
          <p className="regular-16 text-gray-10">
            Kontakt vores personale og få mere information
          </p>

          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Instagram"
              icon="/instagram-color.svg"
              variant="btn_white"
              full
              href={SOCIALS.links[1].href}
              className="hover:opacity-80"
            />
            <Button
              type="button"
              title="Messenger"
              icon="/messenger.svg"
              variant="btn_white"
              full
              href={SOCIALS.links[0].href}
              className="hover:opacity-80"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image className="hidden md:block" src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};
