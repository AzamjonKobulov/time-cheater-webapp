import SelectButton from "../components/SelectButton";
import Radios from "./Radios";
import Inputs from "./Inputs";
import Checkboxes from "./Checkboxes";
import RangeSlider from "./RangeSlider";

const Action = () => {
  return (
    <div className="w-96 2xl:w-[450px] 3xl:w-[509px] bg-white rounded pt-7 3xl:pt-[38px] pb-6 3xl:pb-8 px-8 3xl:px-12">
      <h1>Action</h1>
      <form action="#" className="mt-12">
        <Inputs />
        <div className="mt-8 3xl:mt-10 space-y-4">
          <h5 className="text-lg 3xl:text-xl font-bold text-brand-title">
            Select action
          </h5>
          <SelectButton />
        </div>
        <Radios />
        <Checkboxes />
        <RangeSlider />
        <button className="mt-14 w-52 text-white bg-brand-wind font-medium rounded py-3">
          Save
        </button>
      </form>
    </div>
  );
};

export default Action;
