import { useState } from "react";
import toast from "react-hot-toast";
import { joinWaitlist } from "../services/api";

const initialForm = {
  name: "",
  email: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useWaitlistForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await joinWaitlist({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase()
      });

      toast.success(response.message || "Successfully joined waitlist");
      setForm(initialForm);
    } catch (error) {
      const message =
        error.response?.data?.message || "Unable to join the waitlist right now";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  };
};
