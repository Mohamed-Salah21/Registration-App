import "./login-form.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MessegeAlert from "../../messege_alert/MessegeAlert";
import DataContext from "../../DataContext";
const LoginForm = ({ setLoggedIn }) => {
  const {
    loginEmail,
    loginPassword,
    setLoginEmail,
    submitted,
    setLoginPassword,
    registrationValues,
  } = useContext(DataContext);
  const [alert, setAlert] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleLogin = () => {
    if (!submitted) setAlert(true);
    else if (submitted && registrationValues.email !== loginEmail)
      setAlert(true);
    else if (submitted && registrationValues.password !== loginPassword)
      setAlert(true);
    else {
      setLoggedIn(true);
      if (checked) {
        setLoginEmail((e) => e);
        setLoginPassword((p) => p);
      } else {
        setLoginEmail(() => "");
        setLoginPassword(() => "");
      }
    }
  };
  const [showed, showPassword] = useState(false);
  return (
    <div className="login-form">
      <h1> Login Form </h1>
      {alert && <MessegeAlert />}
      <div className={`input ${loginEmail.length > 0 && "still-focus"} `}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          autoFocus={loginEmail.length === 0 && "true"}
        />
        <i className="fas fa-envelope"></i>
        <label>email</label>
      </div>
      <div className={`input ${loginPassword.length > 0 && "still-focus"} `}>
        <input
          type={showed ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          autoFocus={loginEmail.length > 0 && "true"}
        />
        <i className="fas fa-lock"></i>
        <label>password</label>
        {loginPassword.length > 0 && (
          <button
            className="show-password-btn"
            onClick={() => showPassword(!showed)}
          >
            {!showed ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        )}
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          id="remember_me"
          checked={checked && "checked"}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="remember_me">remember me</label>
      </div>
      <div className="forget-password-el">
        <Link to="/rememberPassword"> Forget password? </Link>
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <div className="registration-link">
        {!submitted ? (
          <p>
            Not yet remember?
            <Link to="/registration"> Register now </Link>
          </p>
        ) : (
          <p> You are now a member </p>
        )}
      </div>
    </div>
  );
};
export default LoginForm;
