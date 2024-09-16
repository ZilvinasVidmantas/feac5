export const TextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onFocus,
  error,
  onBlur,
  disabled = false
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};