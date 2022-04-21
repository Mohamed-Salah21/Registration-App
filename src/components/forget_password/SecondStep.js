import React from "react";

const SecondStep = ({ properties }) => {
  const { registrationValues, setSteps } = properties;
  return (
    <>
      <p> your password is: {registrationValues.password} </p>
      <button className="reseting" onClick={() => setSteps("last")}>
        would you like to reset your password?
      </button>
    </>
  );
};

export default SecondStep;
