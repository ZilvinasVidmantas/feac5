import { useEffect, useState } from "react";
import { AuthService } from "../../../../../services/auth-service";

export const useRegistrationFormValidation = ({
  errors,
  setErrors,
  formData,
  setIsLoading,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { fullName, password, confirmPassword, phoneNumber, address } = formData;
    let validationErrors = {};
    let valid = true;

    if (!fullName) {
      validationErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phoneNumber || !phonePattern.test(phoneNumber)) {
      validationErrors.phoneNumber = "Phone number must be 10 digits";
      valid = false;
    }

    if (!address) {
      validationErrors.address = "Address is required";
      valid = false;
    }

    setErrors(validationErrors);
    setIsFormValid(valid);
  }, [formData]);

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      setErrors({ ...errors, email: "Valid Email is required" });
      setIsFormValid(false);
    } else {
      setErrors({ ...errors, email: "" });
      checkEmailUniqueness(formData.email);
      // TODO: LVL 1  - Patikrinti ar Forma yra validi, jei taip, tai nustatyti isFormValid i true
      // TODO: LVL 2 - sugalvoti kaip perršyti kodą kad nebūtų kodo dubliavimo su 44 eiliutėje atliekamu nustatymu
    }
  }, [formData.email])

  const checkEmailUniqueness = async (email) => {
    console.log('tikrinamas pastas');
    try {
      setIsLoading(true);
      await AuthService.checkEmailAvailability(email);
      setErrors({ ...errors, email: "" });
    } catch (error) {
      setErrors({ ...errors, email: error });
      setIsFormValid(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isFormValid
  }
}