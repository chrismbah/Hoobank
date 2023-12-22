import React from "react";
import { stats } from "../constants";
import styles from "../style";

export default function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex flex-1 justify-start items-center m-3 `}>
          <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
            {stat.value}
          </h4>
          <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 ">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
