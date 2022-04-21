import "./registraion-form.scss";
import { useContext } from "react";
import Context from "../../DataContext";
import { Link } from "react-router-dom";
import validation from "../../validation/validateRegistrationValues";
const RegistrationForm = ({ errors, setErrors, setClicking }) => {
  const { registrationValues, setRegistrationValues } = useContext(Context);
  const handleSignUpVals = (event) => {
    const { name, value } = event.target;
    setRegistrationValues({
      ...registrationValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(registrationValues));
    setClicking(true);
  };
  return (
    <form className="reg-form">
      <h1>Registraion</h1>
      <div
        className={`input 
        ${registrationValues.fullname.length > 0 && "still-focus"}
         ${errors.fullname && "error"} 
        `}
      >
        <input
          type="text"
          value={registrationValues.fullname}
          name="fullname"
          onChange={handleSignUpVals}
          autoFocus
        />
        <label>Fullname</label>
        {errors.fullname && <p> {errors.fullname} </p>}
      </div>
      <div
        className={`input 
        ${registrationValues.email.length > 0 && "still-focus"}
        ${errors.email && "error"}
      `}
      >
        <input
          type="email"
          value={registrationValues.email}
          name="email"
          onChange={handleSignUpVals}
        />
        <label>Email</label>
        {errors.email && <p> {errors.email} </p>}
      </div>
      <div
        className={`input 
        ${registrationValues.password.length > 0 && "still-focus"}
         ${errors.password && "error"} 
        `}
      >
        <input
          type="password"
          value={registrationValues.password}
          name="password"
          onChange={handleSignUpVals}
        />
        <label>Password</label>

        {errors.password && <p> {errors.password} </p>}
      </div>
      <div
        className={`
          input
          ${registrationValues.confirmPassword.length > 0 && "still-focus"}
          ${errors.confirmPassword && "error"}
        `}
      >
        <input
          type="password"
          value={registrationValues.confirmPassword}
          name="confirmPassword"
          onChange={handleSignUpVals}
        />
        <label>Confirm Password</label>
        {errors.confirmPassword && <p> {errors.confirmPassword} </p>}
      </div>
      <button className="register-btn" onClick={handleSubmit}>
        Register
      </button>
      <p className="login-link">
        Back to <Link to="/">Login</Link>
      </p>
    </form>
  );
};
export default RegistrationForm;
