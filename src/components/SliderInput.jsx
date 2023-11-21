import ReactSlider from "react-slider";

const SliderInput = () => {
  return (
    <div className="relative">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default SliderInput;
