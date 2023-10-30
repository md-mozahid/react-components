export default function Input({
  type,
  className,
  name,
  value,
  placeholder,
  ...rest
}) {
  return (
    <input
      className={`px-3 py-2 rounded-md border border-[#475569] ${className}`}
      type={type === "password" ? "password" : "text"}
      name={name}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
}
