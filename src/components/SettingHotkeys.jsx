import React from "react";

const SettingHotkeys = () => {
  return (
    <div className="max-w-[467px] bg-white rounded shadow-base space-y-20 2xl:space-y-24 3xl:space-y-28 px-7 2xl:px-10 3xl:px-12 pt-12 2xl:pt-16 3xl:pt-20 pb-8 2xl:pb-11 3xl:pb-14">
      <h2 className="text-3xl 3xl:text-4xl text-brand-title text-center">
        Setting hotkeys
      </h2>
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <div className="flex-1 bg-brand-purple-light text-brand-purple-100 font-medium rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Start
          </div>
          <div className="w-28 2xl:w-[119px] text-center bg-brand-purple-200 text-white uppercase font-medium rounded py-2 px-4 2xl:py-3 2xl:px-5">
            f6
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex-1 bg-brand-purple-light text-brand-purple-100 font-medium rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Stop
          </div>
          <div className="w-28 2xl:w-[119px] text-center bg-brand-purple-200 text-white uppercase font-medium rounded py-2 px-4 2xl:py-3 2xl:px-5">
            f7
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingHotkeys;
