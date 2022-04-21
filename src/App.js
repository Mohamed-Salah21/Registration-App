import RoutesPages from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ContextHook from "./components/DataContext";
function App() {
  const [registrationValues, setRegistrationValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [resetValues, setResetValues] = useState({
    verifiedEmail: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitting] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <ContextHook.Provider
      value={{
        registrationValues,
        setRegistrationValues,
        submitted,
        setSubmitting,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        resetValues,
        setResetValues,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <RoutesPages />
        </BrowserRouter>
      </div>
    </ContextHook.Provider>
  );
}
export default App;
