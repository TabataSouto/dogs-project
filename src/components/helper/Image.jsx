import PropTypes from "prop-types";
import styles from "./Image.module.css";
import { useState } from "react";

function Image({ alt, ...props }) {
  const { wrapperClass, imgClass, skeletonClass } = styles;
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={wrapperClass}>
      {skeleton && <div className={skeletonClass}></div>}
      <img
        className={imgClass}
        src=""
        alt={alt}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}

export default Image;

Image.propTypes = {
  alt: PropTypes.string,
};
