import { FC } from "@/utils/types";
import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.svg";

const Logo: FC = ({ className }) => {
  return (
    <div className={className}>
      <Image
        src={logo}
        width={84}
        height={30}
        alt="logo"
        className="w-full h-full"
      />
    </div>
  );
};

export default Logo;
