import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Some button",
  },
  {
    name: "Some button",
  },
];

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="flex items-center gap-3.5">
          {plans.map((plan) => (
            <RadioGroup.Option
              key={plan.name}
              value={plan}
              className={({ checked }) =>
                `${
                  checked ? "bg-brand-wind text-white" : "bg-white"
                } w-1/2 cursor-pointer rounded text-center text-brand-wind font-medium border border-brand-wind py-2.5 3xl:py-3`
              }
            >
              {plan.name}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
