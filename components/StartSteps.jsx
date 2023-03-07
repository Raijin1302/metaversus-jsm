import styles from "@/styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-3xl glassmorphism">
      <p className="text-white font-bold text-[20px]">0{number}</p>
    </div>
    <p className="flex-1 text-[#B0B0B0] text-[18px] leading-[32px] font-normal ml-8">
      {text}
    </p>
  </div>
);

export default StartSteps;
