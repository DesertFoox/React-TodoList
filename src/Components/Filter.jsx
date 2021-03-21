import React from "react";

const Filter = ({ setFilterStatus }) => {

  const GetselectedValue = (e) => {
    setFilterStatus(e.target.value);
  };
  
  return (
    <select
      className="block-example border border-primary nobg browser-default custom-select mb-3"
      onChange={GetselectedValue}
    >
      <option selected value="All">
        All
      </option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
};

export default Filter;
