import FeatureCard from "@/components/atoms/FeatureCard";
import { FC } from "@/utils/types";
import React from "react";

const Features: FC = () => {
  return (
    <section className="container mx-auto px-4">
      <h4 className="text-2xl sm:text-4xl text-center font-semibold mb-5 sm:mb-10">
        Exciting Features Just For You
      </h4>
      <div className="flex justify-center gap-6 sm:gap-10 flex-wrap p-3">
        <FeatureCard
          title="Surprise Delivery Alerts"
          content="Makes deliveries faster and cheaper by finding the quickest routes and adjusting for traffic in real-time. This means happier customers and more savings for businesses."
          colorClasses="bg-[#48BED8] text-white"
          iconName="icon-gift"
        />
        <FeatureCard
          title="Simple Payment"
          content="Say goodbye to manual payments with our easy pay feature. Pika makes payment a breeze for all deliveries."
          colorClasses="bg-[#60D66A] text-white"
          iconName="icon-dollar"
        />
        <FeatureCard
          title="Verified Riders"
          content="At Pika, your peace of mind comes first. With our thorough vetting and GPS tracking, your package is always in safe hands, giving you real-time peace of mind."
          colorClasses="bg-[#C55FFC] text-white"
          iconName="icon-motorcycle"
        />
        <FeatureCard
          title="Low Price"
          content="The best part? At Pika, get top-notch service at a great price. Enjoy affordable logistics without sacrificing quality. Rest assured your deliveries are safe and budget-friendly."
          colorClasses="bg-[#FFFFFF] text-pika-black"
          iconName="icon-price-slash"
        />
      </div>
    </section>
  );
};

export default Features;
