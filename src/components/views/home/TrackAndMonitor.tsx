import React from "react";
import delivery from "../../../assets/images/delivery.svg";
import HomeFlexSection from "./HomeFlexSection";
import { FC } from "@/utils/types";

const TrackAndMonitor: FC = () => {
  return (
    <HomeFlexSection
      title="Track And Monitor Your Delivery In Real Time"
      imageSrc={delivery}
      imageAlt="monitoring a ride"
      content="Easily track your delivery in real-time with Pika. Track your package effortlessly, guaranteeing peace of mind at every step of it's journey."
      action="Explore Pika"
    />
  );
};

export default TrackAndMonitor;
