'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        ASHNE
      </h2>

      <button type="button" className="flex items-center h-fit py-2 border-white border  px-5  rounded-[32px] gap-[12px]">
        <span className="font-normal text-[16px] text-white">
          <link rel="stylesheet" href="https://wa.me/message/UA3MVFZYMM7IH1" />
          Book Call
        </span>
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
