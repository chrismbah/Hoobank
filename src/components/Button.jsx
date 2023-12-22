import React from "react";

export default function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outine-none rounded-[10px] ${styles} `}
    >
      Get Started
    </button>
  );
}
