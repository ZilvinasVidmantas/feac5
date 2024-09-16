import { useState } from "react";
import { useRegistrationFormData } from "./useRegistrationFormData";
import { useRegistrationFormValidation } from "./useRegistrationFormValidation";
import { TextField } from "../../../../../components/TextField/TextField";

export const UserForm = ({ onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    formData,
    handleFocus,
    handleChange,
  } = useRegistrationFormData({ errors, setErrors });

  const { isFormValid } = useRegistrationFormValidation({ errors, setErrors, formData, setIsLoading })

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        onFocus={handleFocus}
        error={errors.fullName}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        onFocus={handleFocus}
        error={errors.email}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        onFocus={handleFocus}
        error={errors.password}
      />

      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        onFocus={handleFocus}
        error={errors.confirmPassword}
      />

      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        onFocus={handleFocus}
        error={errors.phoneNumber}
      />

      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        onFocus={handleFocus}
        error={errors.address}
      />

      <button type="submit" disabled={!isFormValid || isLoading}>
        {isLoading ? "Loading..." : "Register"}
      </button>
    </form>
  );
}
