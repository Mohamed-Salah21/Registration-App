const LastStep = ({ properties }) => {
  const {
    resetValues,
    resetErrors,
    changingPassword,
    handleReset,
    setSteps,
    showed1,
    setShowed1,
    showed2,
    setShowed2,
  } = properties;
  return (
    <>
      <div className={`input ${resetErrors.newPassword && "error"} `}>
        <label>New Password</label>
        <input
          type={showed1 ? "text" : "password"}
          name="newPassword"
          value={resetValues.newPassword}
          onChange={handleReset}
          autoFocus={!resetValues.newPassword && "true"}
        />
        {resetValues.newPassword.length > 0 && (
          <button
            className="show-password-btn"
            onClick={() => setShowed1((boolean) => !boolean)}
          >
            {!showed1 ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        )}
        {resetErrors.newPassword && (
          <p className="error"> {resetErrors.newPassword} </p>
        )}
      </div>
      <div
        className={`input confirm-password ${
          resetErrors.confirmPassword && "error"
        }`}
      >
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          value={resetValues.confirmPassword}
          onChange={handleReset}
          autoFocus={resetValues.newPassword.length > 0 && "true"}
          type={showed2 ? "text" : "password"}
        />
        {resetValues.confirmPassword.length > 0 && (
          <button
            className="show-password-btn"
            onClick={() => setShowed2((boolean) => !boolean)}
          >
            {!showed2 ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        )}
        {resetErrors.confirmPassword && (
          <p className="error"> {resetErrors.confirmPassword} </p>
        )}
      </div>
      <button className="reseting" onClick={() => setSteps("second")}>
        No i don't want to reset my password
      </button>
      <button className="submit-button" onClick={changingPassword}>
        reset
      </button>
    </>
  );
};

export default LastStep;
