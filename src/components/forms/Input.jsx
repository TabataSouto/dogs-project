import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input({ label, type, name, value, onChange, error = "", onBlur }) {
  const { wrapper, inputClass, errorClass, labelClass } = styles;

  return (
    <div className={wrapper}>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input
        className={inputClass}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="current-password"
      />
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
};
