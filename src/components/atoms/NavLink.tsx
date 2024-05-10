import { FC } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
};

const NavLink: FC<Props> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="text-base font-medium text-primary-navlink hover:brightness-125"
    >
      {children}
    </Link>
  );
};

export default NavLink;
