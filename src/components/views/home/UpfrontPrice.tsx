import { FC } from "@/utils/types";
import React from "react";
import airplane from "../../../assets/images/airplane.svg";
import HomeFlexSection from "./HomeFlexSection";

const UpfrontPrice: FC = () => {
  return (
    <HomeFlexSection
      title="Upfront Delivery Cost"
      imageSrc={airplane}
      imageAlt="Aeroplane"
      content="With Pika, there are no surprises. Know exactly how much your delivery will cost upfront. Simply enter your details, and Pika will provide you with transparent pricing, ensuring you’re fully informed before you proceed."
      action="Try it"
      imageIsRight
    />
  );
};

export default UpfrontPrice;
