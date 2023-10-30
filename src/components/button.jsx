const Button = ({ children, type, className, ...rest }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full text-center text-base ${className}`}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
