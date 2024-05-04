import "./App.css";
import { useState, useEffect } from "react";

import Feedback from "./Feedback/Feedback";
import { Options } from "./Options/Options";
import Description from "./Description/Description";

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const savedState = localStorage.getItem("feedbackState");
    if (savedState) {
      setState(JSON.parse(savedState));
    } else {
      setState({ good: 0, neutral: 0, bad: 0 });
    }
  }, []);

  const updateFeedback = (e) => {
    const { name } = e.target;
    if (name === "Reset") {
      setState({ good: 0, neutral: 0, bad: 0 });
      localStorage.removeItem("feedbackState");
      return;
    }
    const newState = { ...state, [name]: state[name] + 1 };
    setState(newState);
    return localStorage.setItem("feedbackState", JSON.stringify(newState));
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

      <Feedback
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={totalFeedback(state)}
        positivePercentage={positiveFeedback()}
      />
    </>
  );
}
