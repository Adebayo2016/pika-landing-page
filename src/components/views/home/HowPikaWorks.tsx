import HowItWorksCard from "@/components/atoms/HowItWorksCard";
import { FC } from "@/utils/types";
import React from "react";

const HowPikaWorks: FC = () => {
  return (
    <section className="container mx-auto px-4 ">
      <h4 className="text-2xl sm:text-4xl text-center font-semibold mb-5 sm:mb-10">
        How Pika works
      </h4>
      <div className="flex justify-center gap-6 sm:gap-10 flex-wrap p-3">
        <HowItWorksCard
          title="Select Delivery Type"
          content="Pika offers customizable delivery options, allowing you to choose the
        type of delivery that suits your needs, whether it's same day delivery
        or interstate delivery."
          iconBgClass="bg-[#48BED8]"
          iconName="icon-ship"
        />
        <HowItWorksCard
          title="Select Your Address"
          content="Whether it's your home, office, or a friend's place, selecting the right address ensures your package reaches you seamlessly. Plus, you can save your frequently used addresses for even quicker ordering next time!"
          iconBgClass="bg-[#C55FFC]"
          iconName="icon-motorcycle"
        />
        <HowItWorksCard
          title="Tailor your shipment"
          content="Pika makes delivery scheduling a breeze. Choose your preferred date and time effortlessly and stay updated at every step. Say goodbye to stress with Pika's effortless scheduling."
          iconName="icon-bus"
          iconBgClass="bg-[#60D66A]"
        />
      </div>
    </section>
  );
};

export default HowPikaWorks;
