import styles from "@/styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="" className="w-1/2 h-1/2" />
    </div>
    <h1 className="mt-7 font-bold text-2xl text-white">{title}</h1>
    <p className="mt-4 font-normal text-lg text-[#b0b0b0]">{subtitle}</p>
  </div>
);

export default NewFeatures;
