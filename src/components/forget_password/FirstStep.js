import React, { useContext } from "react";
import ContextHook from "../DataContext";
const FirstStep = ({ properties }) => {
  const { resetErrors, verificationEmail, handleReset } = properties;
  const { resetValues } = useContext(ContextHook);
  return (
    <>
      <div
        className={`input 
          ${resetValues.verifiedEmail > 0 && "still-focus"} 
          ${resetErrors.verifiedEmail && "error"} 
        `}
      >
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={resetValues.verifiedEmail}
          onChange={handleReset}
          name="verifiedEmail"
          autoFocus
        />
        {resetErrors.verifiedEmail && (
          <p className="error"> {resetErrors.verifiedEmail} </p>
        )}
      </div>
      <button className="submit-button" onClick={verificationEmail}>
        submit
      </button>
    </>
  );
};

export default FirstStep;
