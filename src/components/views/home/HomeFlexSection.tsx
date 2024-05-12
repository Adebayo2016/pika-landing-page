"use client";
import { HomeSections } from "@/utils/enums";
import { cls } from "@/utils/helpers";
import { FC } from "@/utils/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
  imageIsRight?: boolean;
  content: string;
  action: ReactNode;
};

const HomeFlexSection: FC<Props> = ({
  title,
  imageSrc,
  imageAlt,
  imageIsRight,
  content,
  action
}) => {
  return (
    <section className="container mx-auto px-4 sm:px-20 py-20 sm:py-28 text-pika-black">
      <motion.h4
        className="md:hidden text-center text-2xl sm:text-4xl font-semibold mb-5 sm:mb-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          type: "tween"
        }}
      >
        {title}
      </motion.h4>
      <div
        className={cls(
          "flex justify-center items-center gap-y-0 gap-10 flex-col p-3",
          imageIsRight ? "sm:flex-row-reverse" : "sm:flex-row"
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full sm:w-1/2 px-10 py-5 sm:p-5 sm:max-w-[500px]"
        >
          <Image
            src={imageSrc}
            height={150}
            width={150}
            alt={imageAlt}
            className="w-full"
          />
        </motion.div>
        <div className="flex flex-col items-start gap-4 md:max-w-[380px] md:w-1/2 md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: "tween"
            }}
            className="text-3xl sm:text-4xl font-semibold max-w-[650px] leading-20 hidden md:block"
          >
            {title}
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base sm:max-w-[400px]"
          >
            {content}
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="sm:mt-10"
          >
            <Link href={`/#${HomeSections.TRY_PIKA}`}>{action}</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFlexSection;
