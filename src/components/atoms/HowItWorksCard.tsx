"use client";
import React from "react";
import Icon from "./Icon";
import { FC } from "@/utils/types";
import { IconNames } from "@/utils/iconNames";
import { cls } from "@/utils/helpers";
import { motion } from "framer-motion";

type Props = {
  title: string;
  content: string;
  iconBgClass: string;
  iconName: IconNames;
};

const HowItWorksCard: FC<Props> = ({
  title,
  content,
  iconBgClass,
  iconName
}) => {
  return (
    <div className="shadow-card rounded-2xl p-10 flex flex-col items-start gap-5 text-pika-black max-w-[420px] h-full">
      <motion.div
        className={cls(
          "w-20 h-20 rounded-full  flex justify-center items-center",
          iconBgClass
        )}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon name={iconName} className="text-white text-4xl drop-shadow-sm" />
      </motion.div>
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-xl font-semibold"
      >
        {title}
      </motion.h4>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {content}
      </motion.span>
    </div>
  );
};

export default HowItWorksCard;
