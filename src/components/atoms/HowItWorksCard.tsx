import React from "react";
import Icon from "./Icon";
import { FC } from "@/utils/types";
import { IconNames } from "@/utils/iconNames";
import { cls } from "@/utils/helpers";

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
    <div className="shadow-card rounded-2xl p-10 flex flex-col items-start gap-5 text-pika-black max-w-[420px]">
      <div
        className={cls(
          "w-20 h-20 rounded-full  flex justify-center items-center",
          iconBgClass
        )}
      >
        <Icon name={iconName} className="text-white text-4xl drop-shadow-sm" />
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <span>{content}</span>
    </div>
  );
};

export default HowItWorksCard;
