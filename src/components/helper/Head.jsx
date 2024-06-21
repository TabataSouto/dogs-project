import { useEffect } from "react";
import PropTyes from "prop-types";

function Head({ title, description = "" }) {
  useEffect(() => {
    document.title = `${title} | Dogs`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description);
  }, [title, description]);

  return <div>Head</div>;
}

export default Head;

Head.propTypes = {
  title: PropTyes.string.isRequired,
  description: PropTyes.string,
};
