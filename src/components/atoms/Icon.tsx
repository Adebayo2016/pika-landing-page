import { FC } from "@/utils/types";
import { cls } from "@/utils/helpers";
import { IconNames } from "@/utils/iconNames";

type Props = {
  name: IconNames;
  size?: number | string;
};

const Icon: FC<Props> = ({ className, name, size }) => {
  return (
    <i
      style={{
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined
      }}
      className={cls("text-2xl", name, className)}
    />
  );
};

export default Icon;
