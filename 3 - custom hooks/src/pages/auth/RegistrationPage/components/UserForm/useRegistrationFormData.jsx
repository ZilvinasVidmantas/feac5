import { useState } from "react";

export const useRegistrationFormData = ({
  errors, 
  setErrors,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  });

  // Handle input focus
  const handleFocus = (event) => {
    setErrors({ ...errors, [event.target.name]: "" });
  };

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    handleFocus,
    handleChange,
  };
}