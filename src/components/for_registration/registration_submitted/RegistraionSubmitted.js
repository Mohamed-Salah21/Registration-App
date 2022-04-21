import "./registration-submitted.scss";
import { Link } from "react-router-dom";
const RegistrationSubmitted = () => {
  return (
    <div className="reg-submitted">
      <h1>Thank you</h1>
      <article> This account is already created successfully</article>
      <div className="link">
        <Link to="/"> continue </Link>
      </div>
    </div>
  );
};
export default RegistrationSubmitted;
