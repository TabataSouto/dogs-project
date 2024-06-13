import PropTypes from "prop-types";
import styles from "./Input.module.css";

function Input({ label, type, name }) {
  const { wrapper, inputClass, errorClass, labelClass } = styles;

  return (
    <div className={wrapper}>
      <label className={labelClass} htmlFor={name}>{label}</label>
      <input className={inputClass} type={type} id={name} name={name} />
      <p className={errorClass}>Error</p>
    </div>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
