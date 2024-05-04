import PropTypes from "prop-types";

// import css from "./Options.module";

const Options = ({ options, updateFeedback, total }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={updateFeedback}
        >
          {option}
        </button>
      ))}
      {total > 0 && (
        <button type="button" name="Reset" onClick={updateFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateFeedback: PropTypes.func.isRequired,
};

export default Options;
