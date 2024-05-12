import { FC } from "@/utils/types";
import Image from "next/image";
import React from "react";
import drone from "../../../assets/images/drone.svg";
import safeDelivery from "../../../assets/images/safe-delivery.svg";
import doorDelivery from "../../../assets/images/door-delivery.svg";
import Button from "@/components/atoms/Button";

const DeliverWithPika: FC = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="shadow-card rounded-3xl sm:p-6 sm:m-8">
        <div className="flex justify-center items-center flex-wrap gap-3">
          <Image
            src={drone}
            height={150}
            width={150}
            alt="drone delivery"
            className="max-w-[400px] w-full min-w-28 p-6"
          />
          <Image
            src={safeDelivery}
            height={150}
            width={150}
            alt="drone delivery"
            className="max-w-[400px] w-full min-w-28 hidden sm:block"
          />
          <Image
            src={doorDelivery}
            height={150}
            width={150}
            alt="drone delivery"
            className="max-w-[400px] w-full min-w-28 hidden sm:block"
          />
        </div>
        <div className="flex flex-col items-center text-center p-3 py-10 sm:p-20">
          <h2 className="text-3xl sm:text-4xl font-semibold max-w-[650px] leading-20 mb-3">
            Deliver with Pika
          </h2>
          <span className="text-sm sm:text-base sm:max-w-[400px]">
            Our fleet is on standby, ready to make deliveries immediately.
            Whether it's a van, car, or motorcycle you need, Pika's got you
            covered.
          </span>
          <div className="flex items-center flex-wrap justify-center gap-5 mt-6 sm:mt-10">
            <Button
              className="py-3 px-4 sm:px-6 rounded-xl whitespace-nowrap"
              variant="card"
            >
              Join Pika as Rider
            </Button>
            <Button
              className="py-3 px-4 sm:px-6 rounded-xl whitespace-nowrap"
              variant="card"
            >
              Join as Business
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverWithPika;
