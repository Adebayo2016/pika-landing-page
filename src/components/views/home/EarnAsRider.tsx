import { FC } from "@/utils/types";
import React from "react";
import HomeFlexSection from "./HomeFlexSection";
import rider from "../../../assets/images/rider.svg";
import Button from "@/components/atoms/Button";

const EarnAsRider: FC = () => {
  return (
    <HomeFlexSection
      title="Earn As A Pika Rider"
      imageSrc={rider}
      imageAlt="A rider"
      content="You're free to set your own schedule, work from anywhere, and decide how much you want to work. You can accept or reject tasks at your convenience and easily locate opportunities nearby. There's no requirement to go to an office or have a boss to report to anymore."
      action={<Button className="py-3 px-6 rounded-2xl">Try it</Button>}
    />
  );
};

export default EarnAsRider;
