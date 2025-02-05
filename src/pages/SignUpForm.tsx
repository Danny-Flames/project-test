import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { registerUser } from "../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/hook";
import { notifyError, notifySuccess } from "../alert/toastService";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isBtnActive =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.password.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // I manually trigger the pending state because of the setTimeout() else there would have been no need to
    // Because redux doesn’t even know a request has started until after 2 seconds because of the setTimeout.
    dispatch({ type: "auth/register/pending" });

    setTimeout(async () => {
      try {
        const resultAction = await dispatch(registerUser(formData));
        if (registerUser.fulfilled.match(resultAction)) {
          // alert("Registration successful! Redirecting to login...");
          notifySuccess("Registration successful! Redirecting to login...");
          navigate("/auth/login");
        } else if (registerUser.rejected.match(resultAction)) {
          console.error(resultAction.payload || "Registration failed");
          notifyError(
            (resultAction.payload as string) || "Registration failed"
          );
        }
      } catch (error) {
        console.error("Registration error:", error);
        notifyError("An error occurred. Please try again.");
      } finally {
        console.log("Api call completed...");
      }
    }, 2000);
  };

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
        <button className="absolute top-4 right-4 bg-black rounded-full h-5 w-5 flex justify-center items-center">
          <AiOutlineClose size={14} className="text-white" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900">
          Sign up a new account
        </h2>

        <div className="my-4 flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            disabled={loading}
          />

          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            disabled={loading}
          />

          <Input
            label="Phone number"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234"
            disabled={loading}
          />

          <div>
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-normal text-gray-700"
              >
                Password
              </label>
              <a href="#" className="text-sm text-red-600 hover:text-red-500">
                Forgot Password
              </a>
            </div>
            <Input
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isPasswordInput
              containerClassName="w-full"
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            fullWidth
            isBtnActive={isBtnActive}
            disabled={loading || !isBtnActive}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-red-600 hover:text-red-500 cursor-pointer"
            onClick={() => handleNavigate("auth/login")}
          >
            Sign In
          </span>
        </p>

        <p className="mt-4 text-xs text-gray-500">
          Please visit{" "}
          <a href="#" className="underline">
            Afrikobo Privacy Statement
          </a>{" "}
          to learn more about personal data processing at Afrikobo. The{" "}
          <a href="#" className="underline">
            Afrikobo Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
