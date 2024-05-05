import "./App.css";
import { useState, useEffect } from "react";

import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import Notification from "./Notification/Notification";

export default function App() {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("feedbackState");
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });
  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(state));
    console.log(state);
  }, [state]);

  const updateFeedback = (e) => {
    const { name } = e.target;
    if (name === "Reset") {
      setState({ good: 0, neutral: 0, bad: 0 });
      return;
    }
    setState({ ...state, [name]: state[name] + 1 });
  };

  const totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };
  const positiveFeedback = () => {
    const total = totalFeedback(state);
    if (!total) {
      return 0;
    }
    return Math.round((state.good / total) * 100);
  };

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        options={Object.keys(state)}
        updateFeedback={updateFeedback}
        total={totalFeedback(state)}
      />
      {totalFeedback(state) > 0 ? (
        <Feedback
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={totalFeedback(state)}
          positivePercentage={positiveFeedback()}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
