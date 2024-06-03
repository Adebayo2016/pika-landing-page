"use client";
import { FC } from "@/utils/types";
import React from "react";
import Hero from "./Hero";
import TrackAndMonitor from "./TrackAndMonitor";
import UpfrontPrice from "./UpfrontPrice";
import EarnAsRider from "./EarnAsRider";
import HowPikaWorks from "./HowPikaWorks";
import Features from "./Features";
import DeliverWithPika from "./DeliverWithPika";
import WaitlistModal from "./WaitlistModal";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <TrackAndMonitor />
      <HowPikaWorks />
      <UpfrontPrice />
      <Features />
      <EarnAsRider />
      <DeliverWithPika />
      <WaitlistModal />
    </main>
  );
};

export default Home;
