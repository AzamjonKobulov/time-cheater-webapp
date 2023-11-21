import SelectText from "../components/SelectText";

const data = [
  { name: "Select 1" },
  { name: "Select 2" },
  { name: "Select 3" },
  { name: "Select 4" },
  { name: "Select 5" },
  { name: "Select 6" },
];

const Inputs = () => {
  return (
    <div className="space-y-5">
      <label htmlFor="text" className="flex flex-col gap-2">
        <span className="text-lg">Input test text</span>
        <input type="text" className="w-full" id="text" />
      </label>
      <label htmlFor="select" className="flex items-center justify-between">
        <span className="text-lg">Select test text</span>
        <SelectText data={data} />
      </label>
    </div>
  );
};

export default Inputs;
