"use client";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.interWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
    </motion.div>
  </section>
);

export default About;
