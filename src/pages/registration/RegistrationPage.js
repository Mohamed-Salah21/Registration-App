import "./registration-page.scss";
import { useContext, useEffect, useState } from "react";
import Context from "../../components/DataContext";
import RegistrationForm from "../../components/for_registration/registration_form/RegistraionForm";
import RegistraionSubmitted from "../../components/for_registration/registration_submitted/RegistraionSubmitted";
const RegistraionPage = () => {
  const { submitted, setSubmitting, registrationValues, setLoginEmail } =
    useContext(Context);
  const [errors, setErrors] = useState({});
  const [clicked, setClicking] = useState(false);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && clicked) {
      setSubmitting(true);
      setLoginEmail(registrationValues.email);
    }
  }, [errors, clicked, registrationValues.email, setLoginEmail, setSubmitting]);
  return (
    <section className="registration-page">
      {!submitted ? (
        <RegistrationForm
          errors={errors}
          setErrors={setErrors}
          setClicking={setClicking}
        />
      ) : (
        <RegistraionSubmitted />
      )}
    </section>
  );
};
export default RegistraionPage;