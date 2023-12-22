import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
export default function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>
            A new way to make payments easy, reliable and secure
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className=" flex flex-col ss:my-0 my-4 min-w-[150px] "
            >
              <h4 className="font-medium text-[18px] leading-[27px] text-white ">
                {footerLink.title}
              </h4>
              <ul className="flex flex-col gap-4 mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-[16px] leading-[24px]
                     text-dimWhite hover:text-secondary cursor-pointer
                     `}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] ">
        <p className="font-normal text-[18px] text-center leading-[27px] text-white ">
          2023 Hoobank. All Rights Reserved.
        </p>
        <div className="flex flex-row justify-start gap-6 md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
