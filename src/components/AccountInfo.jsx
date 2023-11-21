import React from "react";

const AccountInfo = () => {
  return (
    <div className="space-y-10 2xl:space-y-14">
      <h1>Account info</h1>
      <div className="w-[547px] space-y-5">
        <div className="bg-white rounded px-10 2xl:px-14 pt-10 2xlpt-14 3xl:pt-[74px] pb-12 2xl:pb-14">
          <form action="#" className="space-y-2">
            <label htmlFor="name" className="flex items-center justify-between">
              <span className="text-brand-title text-lg">Name</span>
              <input type="text" id="name" value="Mikle" className="w-64" />
            </label>
            <label
              htmlFor="email"
              className="flex items-center justify-between"
            >
              <span className="text-brand-title text-lg">Email</span>
              <input
                type="email"
                id="name"
                value="email@mail.com"
                className="w-64"
              />
            </label>
            <label
              htmlFor="subscriptionInfo"
              className="flex items-center justify-between"
            >
              <span className="text-brand-title text-lg">
                Subscripyion info
              </span>
              <input
                type="text"
                id="subscriptionInfo"
                value="Done"
                className="w-64"
              />
            </label>
          </form>
        </div>
        <div className="bg-white rounded px-10 2xl:px-14 pt-10 2xlpt-14 3xl:pt-[74px] pb-12 2xl:pb-14">
          <form action="#" className="space-y-2">
            <label htmlFor="name" className="flex justify-between">
              <span className="text-brand-title text-lg">Your plan</span>
              <div className="w-60 space-y-2">
                <input type="text" id="name" value="Pro" className="w-full" />
                <button className="w-full text-white text-center shadow-base bg-brand-wind rounded pl-8 pr-4 py-3">
                  Change plan
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
