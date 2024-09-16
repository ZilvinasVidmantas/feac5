import { useState } from "react";
import { UserForm } from "./components/UserForm/UserForm";
import { AuthService } from "../../../services/auth-service";

export const RegistrationPage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleRegistrationFormSubmit = async (formData) => {
    try {
      const registeredUser = await AuthService.register(formData);
      setUser(registeredUser);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <h1>Registration form</h1>
      {user && <pre>{JSON.stringify(user, null, 4)}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserForm onSubmit={handleRegistrationFormSubmit} />
    </div>
  )
};
