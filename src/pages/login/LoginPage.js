import "./login-page.scss";
import LoginForm from "../../components/for_login/login_form/LoginForm";
import LoginSuccessed from "../../components/for_login/login_successed/LoginSuccessed";
import { useState } from "react";
const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="login-page">
      {!loggedIn ? (
        <LoginForm setLoggedIn={setLoggedIn} />
      ) : (
        <LoginSuccessed setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default LoginPage;
