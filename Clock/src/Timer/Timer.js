import React from "react";

const Timer = () => {
  const [timesec, setTimesec] = useState(0);
  const [timeMinet, setTimeMinet] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setTimesec(timesec + 1);
      if (timesec === 59) {
        setTimeMinet(timeMinet + 1);
        setTimesec(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    setTimeMinet(0);
    setTimesec(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  return (
    <div>
      <div>
        <h3>Timer</h3>
        <h3>
          {" "}
          {timeMinet < 30 ? "0" + timeMinet : timeMinet} :{" "}
          {timesec < 30 ? "0" + timesec : timesec}{" "}
        </h3>

        <div>
          <button onClick={restart}>Restart</button>
          <button onClick={stop}></button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
