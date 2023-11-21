import React from "react";

const ListOfConfigurations = () => {
  return (
    <div className="bg-white rounded shadow-base space-y-16 2xl:space-y-20 3xl:space-y-24 px-7 pt-10 2xl:px-12 3xl:px-16 2xl:pt-16 3xl:pt-20 pb-11 3xl:pb-14">
      <h1>List of configurations</h1>
      <div className="space-y-9 2xl:space-y-11 3xl:space-y-14">
        <div className="space-y-3.5 2xl:space-y-5 2xl:text-lg text-brand-wind font-medium">
          <div className="border border-brand-wind rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Сonfigurations 1
          </div>
          <div className="border border-brand-wind rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Сonfigurations 2
          </div>
          <div className="border border-brand-wind rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Сonfigurations 3
          </div>
          <div className="border border-brand-wind rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Сonfigurations 4
          </div>
          <div className="border border-brand-wind rounded py-2 px-4 2xl:py-3 2xl:px-5">
            Сonfigurations 5
          </div>
        </div>
        <button className="w-full text-white text-center shadow-base bg-brand-wind rounded pl-6 2xl:pl-8 pr-3 2xl:pr-4 py-2 2xl:py-3">
          Start
        </button>
      </div>
    </div>
  );
};

export default ListOfConfigurations;
