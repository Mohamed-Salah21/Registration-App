import { Routes, Route } from "react-router";
import LoginPage from "../../pages/login/LoginPage";
import ForgetPassword from "../../pages/forget_password/ForgetPassword";
import RegistrationPage from "../../pages/registration/RegistrationPage";
const RoutesPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/rememberPassword" element={<ForgetPassword />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
};
export default RoutesPages;
