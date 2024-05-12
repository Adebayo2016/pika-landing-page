"use client";
import Button from "@/components/atoms/Button";
import { FC } from "@/utils/types";
import Image from "next/image";
import React from "react";
import hero from "../../../assets/images/hero.svg";
import heroSm from "../../../assets/images/hero-sm.svg";
import Link from "next/link";
import { HomeSections } from "@/utils/enums";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-20 py-5 relative sm:h-[calc(100vh_-_150px)] sm:max-h-[800px] flex flex-col gap-24 sm:gap-32">
      <div>
        <div className="flex flex-col items-start gap-4 sm:pt-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "tween", stiffness: 100 }}
            className=" text-5xl sm:text-7xl font-semibold sm:font-bold sm:max-w-[650px] bg-hero-text bg-clip-text text-transparent tracking-wide sm:tracking-wider leading-20"
          >
            Your Bridge to Effortless Deliveries
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-2xl max-w-[280px] sm:max-w-[400px]"
          >
            Making every delivery experience enjoyable, fast and simple.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 sm:mt-20"
          >
            <Link href={`/#${HomeSections.TRY_PIKA}`}>
              <Button className="py-3 px-6 rounded-2xl">Explore Pika</Button>
            </Link>
          </motion.div>
        </div>
        <div className="hidden md:block absolute right-0 -top-16 h-full w-3/5 -z-[1]">
          <Image
            src={hero}
            height={150}
            width={150}
            alt="hero illustration"
            className=" md:w-full"
          />
        </div>
        <div className="block md:hidden absolute right-0 top-0 h-full w-3/5 -z-[1]">
          <Image
            src={heroSm}
            height={150}
            width={150}
            alt="hero illustration"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Link href={`/#${HomeSections.TRY_PIKA}`}>
            <Button className="py-3 px-4 sm:px-6 rounded-xl" variant="card">
              I am a Business
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Link href={`/#${HomeSections.TRY_PIKA}`}>
            <Button className="py-3 px-4 sm:px-6 rounded-xl" variant="card">
              I am a Logistic Service
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
