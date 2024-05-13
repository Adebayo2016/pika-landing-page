"use client";
import { HomeSections } from "@/utils/enums";
import { FC } from "@/utils/types";
import React from "react";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

const TryPika: FC = () => {
  return (
    <section
      className="container mx-auto px-4 text-center pb-10 sm:py-20"
      id={HomeSections.TRY_PIKA}
    >
      <motion.h4
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          type: "tween"
        }}
        className="text-xl sm:text-4xl text-center font-medium mb-2 sm:mb-4"
      >
        Are You Ready To Try Pika?
      </motion.h4>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="max-w-[230px] sm:max-w-[430px] block mx-auto text-xs sm:text-xl"
      >
        Jump on the Pika waitlist today and be the first to know when we launch!
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="py-12 relative"
        
      >
        <WaitlistForm />
      </motion.div>
    </section>
  );
};

export default TryPika;
