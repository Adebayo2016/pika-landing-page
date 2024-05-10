import { FC } from "@/utils/types";
import React from "react";
import airplane from "../../../assets/images/airplane.svg";
import HomeFlexSection from "./HomeFlexSection";
import Button from "@/components/atoms/Button";

const UpfrontPrice: FC = () => {
  return (
    <HomeFlexSection
      title="Upfront Delivery Cost"
      imageSrc={airplane}
      imageAlt="Aeroplane"
      content="With Pika, there are no surprises. Know exactly how much your delivery will cost upfront. Simply enter your details, and Pika will provide you with transparent pricing, ensuring you’re fully informed before you proceed."
      action={<Button className="py-3 px-6 rounded-2xl">Try it</Button>}
      imageIsRight
    />
  );
};

export default UpfrontPrice;
