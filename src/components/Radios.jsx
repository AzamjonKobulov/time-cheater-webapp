import React from "react";

const Radios = () => {
  return (
    <div className="mt-7 3xl:mt-9 space-y-4">
      <h5 className="text-lg 3xl:text-xl font-bold text-brand-title">
        Сhoose more
      </h5>
      <div className="flex items-center gap-3.5 text-sm 3xl:text-base">
        <input type="radio" id="radioOne" className="check hidden" name="1" />
        <label htmlFor="radioOne" className="flex items-center gap-3.5">
          <div className="w-5 h-5 shrink-0 grid place-content-center shadow-inner border border-brand-wind rounded-full">
            <span className="w-3 h-3 shrink-0 rounded-full"></span>
          </div>
          <span>Lorem ipsum dolor sit amet</span>
        </label>
      </div>
      <div className="flex items-center gap-3.5 text-sm 3xl:text-base">
        <input type="radio" id="radioTwo" className="check hidden" name="1" />
        <label htmlFor="radioTwo" className="flex items-center gap-3.5">
          <div className="w-5 h-5 shrink-0 grid place-content-center shadow-inner border border-brand-wind rounded-full">
            <span className="w-3 h-3 shrink-0 rounded-full"></span>
          </div>
          <span>Сonsectetur adipiscing elit, sed do eiusmod tempor</span>
        </label>
      </div>
      <div className="flex items-center gap-3.5 text-sm 3xl:text-base">
        <input type="radio" id="radioThree" className="check hidden" name="1" />
        <label htmlFor="radioThree" className="flex items-center gap-3.5">
          <div className="w-5 h-5 shrink-0 grid place-content-center shadow-inner border border-brand-wind rounded-full">
            <span className="w-3 h-3 shrink-0 rounded-full"></span>
          </div>
          <span>Incididunt ut labore et dolore magna aliqua</span>
        </label>
      </div>
    </div>
  );
};

export default Radios;
