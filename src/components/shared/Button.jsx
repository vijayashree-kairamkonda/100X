import PropTypes from "prop-types";

export const Button = ({
  children,
  disabled = false,
  size = "md",
  variant = "default",
  ...rest
}) => {
  const baseStyles =
    "w-full my-3 py-2 font-bold text-center rounded-full disabled:opacity-50";

  const sizeStyles = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const variantStyles = {
    primary:
      "bg-twitter-default py-4 text-neutral-50 font-bold text-center hover:bg-twitter-hover ",
    default:
      "shadow-button  rounded-full bg-neutral-50 text-neutral-1000 hover:bg-neutral-200",
    outline:
      "rouned-5xl border text-twitter-default border-solid border-button-stroke shadow-3xl",
  };

  const disabledStyles = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles}`;
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  variant: PropTypes.oneOf(["default", "outline"]).isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
};
