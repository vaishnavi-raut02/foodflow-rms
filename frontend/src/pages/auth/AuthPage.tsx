import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.role) {
      newErrors.push("Please select role");
    }

    if (!formData.email) {
      newErrors.push("Email is required");
    }

    if (!formData.password) {
      newErrors.push("Password is required");
    }

    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.push("Full name is required");
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.push("Passwords do not match");
      }
    }

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (isLogin) {
        // Backend API integration later

        login(
          {
            role: formData.role,
            email: formData.email,
          },
          "dummy-jwt-token"
        );

        navigate("/dashboard");
      } else {
        alert("Registration successful");
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

return (
  <div className="min-h-screen bg-[#f4f6f8] flex items-center justify-center p-6">

    <div className="w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SECTION */}
      <div className="bg-[#1d2b3f] text-white p-12 flex flex-col justify-center relative overflow-hidden">

        {/* GLOW EFFECT */}
        <div className="absolute w-72 h-72 bg-[#67f0b5]/20 rounded-full blur-3xl -top-10 -left-10" />

        <div className="relative z-10">

        

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Restaurant Management System
          </h1>

         

          {/* FEATURES */}
          

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="bg-[#f7f8fa] flex items-center justify-center p-8 lg:p-14">

        <div className="w-full max-w-md">

          {/* TOGGLE */}
          <div className="flex mb-8 bg-[#e9edf2] rounded-2xl p-1">

            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 rounded-xl font-semibold transition-all ${
                isLogin
                  ? "bg-[#0f8b5f] text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 rounded-xl font-semibold transition-all ${
                !isLogin
                  ? "bg-[#0f8b5f] text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              Sign Up
            </button>

          </div>

          {/* TITLE */}
          <div className="mb-8">

            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              {isLogin
                ? "Welcome Back"
                : "Create Account"}
            </h2>

           

          </div>

          {/* ERRORS */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 text-red-500 p-4 rounded-2xl mb-6">

              <ul className="list-disc ml-5 text-sm space-y-1">

                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}

              </ul>

            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            {!isLogin && (
              <div>

                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#67f0b5]"
                />

              </div>
            )}

            {/* ROLE */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Select Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#67f0b5]"
              >
                <option value="">Choose Role</option>
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                {isLogin && (
                  <option value="admin">
                    Admin
                  </option>
                )}
              </select>

            </div>

            {/* EMAIL */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#67f0b5]"
              />

            </div>

            {/* PHONE */}
            {!isLogin && (
              <div>

                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#67f0b5]"
                />

              </div>
            )}

            {/* PASSWORD */}
            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 pr-12 outline-none focus:ring-2 focus:ring-[#67f0b5]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword
                    ? <FaEyeSlash />
                    : <FaEye />}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            {!isLogin && (
              <div>

                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#67f0b5]"
                />

              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0f8b5f] hover:opacity-90 text-white py-4 rounded-2xl font-semibold transition-all shadow-lg"
            >
              {isLogin
                ? "Login"
                : "Create Account"}
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>
);
};

export default AuthPage;
