import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";

export default function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipising ultrices ametodoi
          aenean neque. Fusce ipsum platea placerat.
        </p>
        <div className="flex flex-wrap mt-6 sm:mt-10">
          <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
          <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain cursor-pointer " />
        </div>
      </div>
    </section>
  );
}
