import { FC } from "@/utils/types";
import React from "react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import { HomeSections } from "@/utils/enums";
import Button from "../atoms/Button";

const Header: FC = () => {
  return (
    <header className="container mx-auto py-6 px-3">
      <div className="card flex items-center justify-between shadow-nav rounded-full px-8 py-5">
        <Logo className="w-20" />
        <nav className="hidden md:flex items-center justify-end flex-1 gap-[10%]">
          <ul className="flex items-center justify-end gap-[5%] flex-1">
            <li>
              <NavLink href={`/#${HomeSections.HERO}`}>Home</NavLink>
            </li>
            <li>
              <NavLink href={`/#${HomeSections.SERVICES}`}>Services</NavLink>
            </li>
            <li>
              <NavLink href={`/#${HomeSections.ABOUT}`}>About</NavLink>
            </li>
            <li>
              <NavLink href={`/#${HomeSections.OFFICE}`}>Our office</NavLink>
            </li>
          </ul>
          <Button variant="outlined" className="px-5 py-2 rounded-3xl">
            Join us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
