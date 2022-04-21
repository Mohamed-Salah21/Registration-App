import "./forget-password.scss";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../components/DataContext";
import FirstStep from "../../components/forget_password/FirstStep";
import SecondStep from "../../components/forget_password/SecondStep";
import LastStep from "../../components/forget_password/LastStep";
const ForgetPassword = () => {
  const {
    setRegistrationValues,
    registrationValues,
    resetValues,
    setResetValues,
    submitted,
  } = useContext(DataContext);
  const validation = (values) => {
    const errors = {};
    if (!values.verifiedEmail && resetSteps === "first")
      errors.verifiedEmail = "Required";
    else if (
      !/\S+@\S+\.\S+/.test(values.verifiedEmail) &&
      resetSteps === "first"
    )
      errors.verifiedEmail = "Email is invalid";
    else if (
      registrationValues.email !== values.verifiedEmail &&
      resetSteps === "first"
    )
      errors.verifiedEmail = "An unkown email";
    if (!values.newPassword && resetSteps === "last")
      errors.newPassword = "Required";
    else if (values.newPassword.length <= 5 && resetSteps === "last")
      errors.newPassword = "Password must be longer than 5 characters";
    else if (/^([a-z])\1+$/.test(values.newPassword) && resetSteps === "last")
      errors.newPassword = "Password musn't be easy";
    else if (
      registrationValues.password === values.newPassword &&
      resetSteps === "last"
    )
      errors.newPassword = "This password is already used";
    if (!values.confirmPassword && resetSteps === "last")
      errors.confirmPassword = "Required";
    else if (
      values.newPassword !== values.confirmPassword &&
      resetSteps === "last"
    )
      errors.confirmPassword = "Passwords are not identical";
    return errors;
  };

  const verificationEmail = () => {
    setResetErrors(validation(resetValues));
    if (registrationValues.email === resetValues.verifiedEmail && submitted) {
      setSteps("second");
      setResetValues({
        ...resetValues,
        verifiedEmail: "",
      });
    }
  };
  const handleReset = (event) => {
    const { name, value } = event.target;
    setResetValues({
      ...resetValues,
      [name]: value,
    });
  };

  const changingPassword = () => {
    setResetErrors(validation(resetValues));
    setClicked(true);
    setRegistrationValues({
      ...registrationValues,
      password: resetValues.newPassword,
    });
  };
  const [resetSteps, setSteps] = useState("first");
  const [clicked, setClicked] = useState(false);
  const [showed1, setShowed1] = useState(false);
  const [showed2, setShowed2] = useState(false);
  const [resetErrors, setResetErrors] = useState({});
  useEffect(() => {
    if (Object.keys(resetErrors).length === 0 && clicked) {
      setSteps("are completed");
      resetValues.newPassword = "";
      resetValues.confirmPassword = "";
    }
  }, [clicked, resetErrors, resetValues, resetSteps]);
  return (
    <div className="forget-password-page">
      <div className="container">
        {resetSteps !== "are completed" && (
          <h1 style={{ textAlign: resetSteps === "second" && "left" }}>
            Forget your password?
          </h1>
        )}
        <div className="inputs">
          {resetSteps === "first" && (
            <FirstStep
              properties={{
                resetErrors: resetErrors,
                verificationEmail: verificationEmail,
                handleReset: handleReset,
              }}
            />
          )}
          {resetSteps === "second" && (
            <SecondStep
              properties={{
                registrationValues: registrationValues,
                setSteps: setSteps,
              }}
            />
          )}
          {resetSteps === "last" && (
            <LastStep
              properties={{
                resetErrors: resetErrors,
                resetValues: resetValues,
                changingPassword: changingPassword,
                handleReset: handleReset,
                showed1: showed1,
                setShowed1: setShowed1,
                showed2: showed2,
                setShowed2: setShowed2,
                setSteps: setSteps,
              }}
            />
          )}
          {resetSteps === "are completed" && (
            <>
              <p> Your password has been reseted successfully </p>
            </>
          )}

          <p className="login-link">
            Back to <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
