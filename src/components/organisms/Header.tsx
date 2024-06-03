"use client";
import { FC } from "@/utils/types";
import React, { useState } from "react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import { HomeSections } from "@/utils/enums";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { cls } from "@/utils/helpers";
import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "@/context/modal";

const Header: FC = () => {
  const { open } = useModalContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  //   functions
  const toggleMenu = () => setMenuIsOpen(curr => !curr);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <header className="container mx-auto py-3 sm:py-5 px-2 sm:px-8 sticky top-0 z-10 backdrop-blur-[2px]">
      <div className="flex items-center justify-between shadow-nav rounded-full px-8 py-5 bg-pika-header">
        <Logo className="w-20 relative z-[1]" />
        <nav
          className={cls(
            "fixed w-full h-screen top-0 bg-pika-header flex flex-col items-center justify-center gap-20 transition-all duration-300",
            "md:static md:w-[unset] md:h-[unset] md:bg-[unset] md:flex-row md:justify-end md:gap-[10%] md:flex-1",
            menuIsOpen ? "left-0" : "-left-full"
          )}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-10  md:gap-[5%] md:flex-1">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              onClick={closeMenu}
            >
              <NavLink href={`/#${HomeSections.HERO}`}>Home</NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              onClick={closeMenu}
            >
              <NavLink href={`/#${HomeSections.SERVICES}`}>Services</NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              onClick={closeMenu}
            >
              <NavLink href={`/#${HomeSections.ABOUT}`}>About</NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              onClick={closeMenu}
            >
              <NavLink href={`/#${HomeSections.OFFICE}`}>Our office</NavLink>
            </motion.li>
          </ul>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Button
              variant="outlined"
              className="px-5 py-2 rounded-3xl font-semibold"
              onClick={() => {
                open();
                closeMenu();
              }}
            >
              Join us
            </Button>
          </motion.div>
        </nav>
        <AnimatePresence>
          {!menuIsOpen ? (
            <Button
              variant="outlined"
              className="text-pika-primary md:hidden w-10 h-10 border-none"
              onClick={toggleMenu}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Icon name="icon-menu" className="text-2xl" />
              </motion.span>
            </Button>
          ) : (
            <Button
              variant="outlined"
              className="text-pika-primary md:hidden w-10 h-10 border-none"
              onClick={toggleMenu}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Icon name="icon-close" className="text-2xl" />
              </motion.span>
            </Button>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
