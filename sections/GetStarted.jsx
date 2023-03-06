"use client";

import { StartSteps, TitleText, TypingText } from "@/components";
import { startingFeatures } from "@/constants";
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { motion } from "framer-motion";
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`flex lg:flex-row flex-col gap-8 mx-auto ${styles.innerWidth}`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center "
      >
        <TypingText title="|  How Metaversus Works" />
        <TitleText title={<>Get started with just a few click</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-6">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature.id} number={index + 1} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
