import PropTypes from "prop-types";

export const SelectInput = ({ defaultVal, options, onChange }) => {
  return (
    <select
      onChange={onChange}
      defaultValue={defaultVal}
      className="w-full pb-1 bg-transparent text-neutral-500 placeholder:text-neutral-500 focus:outline-none"
    >
      {options.map((option, index) => (
        <option
          key={index}
          className="bg-black text-neutral-50"
          value={option.value}
        >
          {option.value}
        </option>
      ))}
    </select>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  defaultVal: PropTypes.any.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
