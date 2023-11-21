import React from "react";

const Checkboxes = () => {
  return (
    <div className="mt-9 3xl:mt-12 space-y-4">
      <h5 className="text-lg 3xl:text-xl font-bold text-brand-title">
        Сheck more text
      </h5>
      <div className="flex items-center justify-between 2xl:gap-9 2xl:justify-start">
        <div className="flex items-center gap-3.5 text-sm 3xl:text-base">
          <input
            type="checkbox"
            id="checkboxOne"
            className="check hidden"
            name="1"
          />
          <label htmlFor="checkboxOne" className="flex items-center gap-3.5">
            <div className="w-[18px] h-[18px] shrink-0 grid place-content-center border border-brand-purple-100">
              <span className="hidden">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4131 1.49481L12 3.08179L4.57656 10.5052L0 5.92878L1.58693 4.3418L4.57656 7.33133L10.4131 1.49481Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <span>Yes</span>
          </label>
        </div>
        <div className="flex items-center gap-3.5 text-sm 3xl:text-base">
          <input
            type="checkbox"
            id="checkboxTwo"
            className="check hidden"
            name="1"
          />
          <label htmlFor="checkboxTwo" className="flex items-center gap-3.5">
            <div className="w-[18px] h-[18px] shrink-0 grid place-content-center border border-brand-purple-100">
              <span className="hidden">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4131 1.49481L12 3.08179L4.57656 10.5052L0 5.92878L1.58693 4.3418L4.57656 7.33133L10.4131 1.49481Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <span>No</span>
          </label>
        </div>
        <div className="flex items-center gap-3.5 text-sm 3xl:text-base">
          <input
            type="checkbox"
            id="checkboxThree"
            className="check hidden"
            name="1"
          />
          <label htmlFor="checkboxThree" className="flex items-center gap-3.5">
            <div className="w-[18px] h-[18px] shrink-0 grid place-content-center border border-brand-purple-100">
              <span className="hidden">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4131 1.49481L12 3.08179L4.57656 10.5052L0 5.92878L1.58693 4.3418L4.57656 7.33133L10.4131 1.49481Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <span>Your own version</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
