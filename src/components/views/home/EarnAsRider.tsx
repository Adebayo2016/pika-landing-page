import { FC } from "@/utils/types";
import React from "react";
import HomeFlexSection from "./HomeFlexSection";
import rider from "../../../assets/images/rider.svg";

const EarnAsRider: FC = () => {
  return (
    <HomeFlexSection
      title="Earn As A Pika Rider"
      imageSrc={rider}
      imageAlt="A rider"
      content="You're free to set your own schedule, work from anywhere, and decide how much you want to work. You can accept or reject tasks at your convenience and easily locate opportunities nearby. There's no requirement to go to an office or have a boss to report to anymore."
      action="Try it"
    />
  );
};

export default EarnAsRider;
