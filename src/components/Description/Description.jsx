import PropTypes from "prop-types";
// import css from "./Description.module.css";

const Description = ({ title, text }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Description;
