"use client";

import { NewFeatures, TitleText, TypingText } from "@/components";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { motion } from "framer-motion";
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`flex lg:flex-row flex-col-reverse gap-8 mx-auto ${styles.innerWidth}`}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 1)}
        className="flex-[1] flex flex-col justify-center "
      >
        <TypingText title="|  Whats New?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[31px] flex flex-wrap justify-between gap-6">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="whats-new"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
