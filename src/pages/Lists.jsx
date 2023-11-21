import ListOfConfigurations from "../components/ListOfConfigurations";
import SettingHotkeys from "../components/SettingHotkeys";

const Lists = () => {
  return (
    <div className="grid grid-cols-2 gap-5 2xl:gap-8">
      <ListOfConfigurations />
      <SettingHotkeys />
    </div>
  );
};

export default Lists;
