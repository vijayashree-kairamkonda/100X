import PropTypes from "prop-types";

export const Fieldset = ({ legend, children, name, style }) => {
  const baseFieldsetStyles = "w-full group rounded px-3 py-3 ";
  const baseLegendStyles = "text-xs";
  const inputStyles = {
    default:
      " border border-solid border-neutral-500  focus-within:border-twitter-default",
    selected: "border border-solid border-twitter-default",
    borderNone: "",
  };
  const legendStyles = {
    default: "text-neutral-500 group-focus-within:text-twitter-default",
    selected: "text-twitter-default",
  };

  const fieldSetClasses = `${baseFieldsetStyles} ${inputStyles[style]}`;
  const legendClasses = `${baseLegendStyles} ${legendStyles[legend]}`;
  return (
    <div>
      <fieldset className={fieldSetClasses}>
        <legend className={legendClasses}>
          <div className="px-2">{name}</div>
        </legend>
        <div className="flex justify-end items-center relative">{children}</div>
      </fieldset>
    </div>
  );
};

Fieldset.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.any,
  name: PropTypes.string,
  style: PropTypes.string,
};
