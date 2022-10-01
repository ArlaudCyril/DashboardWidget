import React from "react";
import Switch from "react-switch";

const SwitchExample = ({ checked, setChecked }) => {
  const handleChange = () => {
    // checked ? setChecked(false) : setChecked(true)
    setChecked(!checked);
  };

  return (
    <label>
      <Switch
        onChange={handleChange}
        checked={checked}
        height={20}
        width={40}
      />
    </label>
  );
};

export default SwitchExample;
