import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../components/Input";
import { Button } from "../components/Button"; // Make sure to import your RootState type
import { loginUser } from "../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/hook";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // I manually trigger the pending state because of the setTimeout() else there would have been no need to
    // Because redux doesn’t even know a request has started until after 2 seconds because of the setTimeout.
    dispatch({ type: "auth/login/pending" });

    setTimeout(async () => {
      try {
        const resultAction = await dispatch(loginUser(formData));
        if (loginUser.fulfilled.match(resultAction)) {
          // alert("Login successful! Redirecting...");
          navigate("/dashboard"); 
        } else if (loginUser.rejected.match(resultAction)) {
          console.error(resultAction.payload || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        console.log('Api call completed...')
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
          Sign into your account
        </h2>

        {error && (
          <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="my-4 flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-red-600 hover:text-red-500 cursor-pointer"
            onClick={() => handleNavigate("auth/register")}
          >
            Sign Up
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

export default LoginForm;
