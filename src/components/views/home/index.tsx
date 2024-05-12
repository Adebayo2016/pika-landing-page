import { FC } from "@/utils/types";
import React from "react";
import Hero from "./Hero";
import TrackAndMonitor from "./TrackAndMonitor";
import UpfrontPrice from "./UpfrontPrice";
import EarnAsRider from "./EarnAsRider";
import HowPikaWorks from "./HowPikaWorks";
import Features from "./Features";
import TryPika from "./TryPika";
import DeliverWithPika from "./DeliverWithPika";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <TrackAndMonitor />
      <HowPikaWorks />
      <UpfrontPrice />
      <Features />
      <EarnAsRider />
      <TryPika />
      <DeliverWithPika />
    </main>
  );
};

export default Home;
