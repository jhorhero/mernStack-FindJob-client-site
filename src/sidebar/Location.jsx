import React from "react";
import InputField from "../components/InputField";

const Location = ({handleSelectChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2"> Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name=""
            id="test"
            value=""
            onChange={handleSelectChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleSelectChange={handleSelectChange}
          value="london"
          title="London"
          name="London"
        />
        <InputField
          handleSelectChange={handleSelectChange}
          value="san francisco"
          title="San Francisco"
          name="san"
        />
        <InputField
          handleSelectChange={handleSelectChange}
          value="brussels"
          title="Brussels"
          name="bruseels"
        />
      </div>
    </div>
  );
};

export default Location;
