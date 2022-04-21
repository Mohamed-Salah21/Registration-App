import "./login-successed.scss";
import { useContext } from "react";
import DataContext from "../../DataContext";
const LoginSuccessed = ({ setLoggedIn }) => {
  const { registrationValues } = useContext(DataContext);
  return (
    <div className="login-successed">
      <button onClick={() => setLoggedIn(false)}>logout</button>
      <h3>
        Hello <span>{registrationValues.fullname}</span>, you are welcome
      </h3>
      <article>Thank you for registration and logging in</article>
    </div>
  );
};
export default LoginSuccessed;
