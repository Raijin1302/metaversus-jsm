"use client";

import { TypingText, TitleText, InsightCard } from "@/components";
import { insights } from "@/constants";
import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`flex flex-col gap-8 mx-auto ${styles.innerWidth}`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <div className="mt-14 flex flex-col items-center gap-8">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
