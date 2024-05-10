import React from "react";
import delivery from "../../../assets/images/delivery.svg";
import Button from "@/components/atoms/Button";
import HomeFlexSection from "./HomeFlexSection";
import { FC } from "@/utils/types";

const TrackAndMonitor: FC = () => {
  return (
    <HomeFlexSection
      title="Track And Monitor Your Delivery In Real Time"
      imageSrc={delivery}
      imageAlt="monitoring a ride"
      content="Easily track your delivery in real-time with Pika. Track your package effortlessly, guaranteeing peace of mind at every step of it's journey."
      action={<Button className="py-3 px-6 rounded-2xl">Explore Pika</Button>}
    />
  );
};

export default TrackAndMonitor;
