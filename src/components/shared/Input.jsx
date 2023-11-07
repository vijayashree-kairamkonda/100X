import PropTypes from "prop-types";
import eyeIcon from "../../assets/eye.svg";
import correctIcon from "../../assets/correct.svg";

export const Input = ({
  readOnly,
  value,
  type,
  placeholder,
  onChange,
  verified,
  textArea,
}) => {
  return (
    <>
      {textArea ? (
        <textarea
          rows="10"
          readOnly={readOnly}
          value={value}
          type={type}
          placeholder={placeholder}
          className="w-full pb-1 bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
          onChange={onChange}
        />
      ) : (
        <input
          readOnly={readOnly}
          value={value}
          type={type}
          placeholder={placeholder}
          className="w-full pb-1 bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
          onChange={onChange}
        />
      )}
      {(type === "password" || verified) && (
        <img
          src={type === "password" ? eyeIcon : verified ? correctIcon : null}
          className="absolute w-5"
          alt="correct Icon"
        />
      )}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  readOnly: PropTypes.bool,
  verified: PropTypes.bool,
  textArea: PropTypes.bool,
};
