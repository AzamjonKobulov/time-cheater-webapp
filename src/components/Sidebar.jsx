import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(!isVisible);
  };

  return (
    <aside className="w-80 2xl:w-96 3xl:w-[37.5rem] fixed left-0 top-0 h-screen overflow-auto 2xl:pb-16 space-y-20 2xl:space-y-24 3xl:space-y-[178px] bg-hero bg-no-repeat bg-cover">
      <div className="w-64 h-12 2xl:w-[336px] 2xl:h-16 mx-auto mt-10 3xl:mt-20">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-xs 3xl:max-w-[444px] mx-auto space-y-10 pl-5 pr-7 2xl:pl-0 2xl:pr-0">
        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <span>
              <img src="/assets/images/icon-home.svg" alt="Home icon" />
            </span>
            <p className="text-xl 3xl:text-2xl text-white">Main page</p>
          </div>
          <div
            className={`bg-brand-dark-blue rounded-[10px] py-4 px-5 2xl:py-5 2xl:px-7 pb-8 2xl:pb-10 3xl:py-7 3xl:px-9 3xl:pb-12 ${
              isVisible ? "pb-10" : ""
            }}`}
          >
            <button
              onClick={handleOpen}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <img
                  src="/assets/images/icon-setting.svg"
                  alt="Settings Icon"
                />
                <p className="text-xl 3xl:text-2xl text-white">Configuration</p>
              </div>
              <span className={isVisible ? "rotate-180" : ""}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.585 9.70752L6 5.12253L1.41502 9.70752L0 8.29255L6 2.29255L12 8.29255L10.585 9.70752Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
              >
                <div className="space-y-4 2xl:space-y-6 pl-12 mt-9">
                  <div className="flex items-center gap-4 text-white text-lg 3xl:text-xl">
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0ZM6.9 11.1632L5.47895 9.7421L7.70526 7.5L5.46316 5.25789L6.88421 3.83684L10.5632 7.5L6.9 11.1632Z"
                          fill="#7ED8F6"
                        />
                      </svg>
                    </span>
                    <p>Configuration 1</p>
                  </div>
                  <div className="flex items-center gap-4 text-white text-lg 3xl:text-xl">
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0ZM6.9 11.1632L5.47895 9.7421L7.70526 7.5L5.46316 5.25789L6.88421 3.83684L10.5632 7.5L6.9 11.1632Z"
                          fill="#7ED8F6"
                        />
                      </svg>
                    </span>
                    <p>Configuration 1</p>
                  </div>
                  <div className="flex items-center gap-4 text-white text-lg 3xl:text-xl">
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0ZM6.9 11.1632L5.47895 9.7421L7.70526 7.5L5.46316 5.25789L6.88421 3.83684L10.5632 7.5L6.9 11.1632Z"
                          fill="#7ED8F6"
                        />
                      </svg>
                    </span>
                    <p>Configuration 1</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span>
            <img src="/assets/images/icon-user.svg" alt="User icon" />
          </span>
          <p className="text-xl 3xl:text-2xl text-white">Account info</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
