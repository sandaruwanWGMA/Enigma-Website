import elipseLogo from "../../../assets/Images-home-page/Ellipse 2.png";
import React, { useState, useEffect } from "react";
import moment from "moment";
import "../Home Section Styles/CountdownTimer.css";

const CountdownTimer = ({ style }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = moment("2024-02-22T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment();
      const difference = targetDate.diff(now);

      if (difference > 0) {
        const duration = moment.duration(difference);

        const totalDays = duration.asDays();
        const days = Math.floor(totalDays);
        const hours = duration.hours() % 24;
        const minutes = duration.minutes() % 60;
        const seconds = duration.seconds() % 60;

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = countdown;

  return (
    <div style={style} className="countdown-timer">
      <div className="elipse-container">
        <div className="elipse-number" style={{ color: "#F2B924" }}>
          {days}
        </div>
        <img src={elipseLogo} alt="Elipse Logo" className="elipse-logo" />
        <div className="label">
          <p>DAYS</p>
        </div>
      </div>
      <div className="elipse-container">
        <div className="elipse-number" style={{ color: "#F2B924" }}>
          {hours}
        </div>
        <img src={elipseLogo} alt="Elipse Logo" className="elipse-logo" />
        <div className="label">
          <p>HOURS</p>
        </div>
      </div>
      <div className="elipse-container">
        <div className="elipse-number" style={{ color: "#F2B924" }}>
          {minutes}
        </div>
        <img src={elipseLogo} alt="Elipse Logo" className="elipse-logo" />
        <div className="label">
          <p>MINS</p>
        </div>
      </div>
      <div className="elipse-container">
        <div className="elipse-number" style={{ color: "#F2B924" }}>
          {seconds}
        </div>
        <img src={elipseLogo} alt="Elipse Logo" className="elipse-logo" />
        <div className="label">
          <p>SECS</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
