import React from "react";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  const targetDate = "2024-10-01T00:00:00";

  return (
    <div className="app">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;
