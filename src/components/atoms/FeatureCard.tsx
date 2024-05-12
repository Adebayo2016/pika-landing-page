import { cls } from "@/utils/helpers";
import { IconNames } from "@/utils/iconNames";
import { FC } from "@/utils/types";
import React from "react";
import Icon from "./Icon";

type Props = {
  title: string;
  content: string;
  colorClasses: string;
  iconName: IconNames;
};

const FeatureCard: FC<Props> = ({ title, content, colorClasses, iconName }) => {
  return (
    <div
      className={cls(
        "shadow-card rounded-[10px] px-10 py-5 flex  items-center gap-6 max-w-[480px] w-full h-full",
        colorClasses
      )}
    >
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <span>{content}</span>
      </div>
      <Icon name={iconName} className="w-10 text-4xl" />
    </div>
  );
};

export default FeatureCard;
