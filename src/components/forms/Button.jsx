import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, ...props }) {
  const { button } = styles;

  return (
    <button {...props} className={button}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.array,
};
