import { useState } from "react";

function LoginPage({ setIsLogin, isLogin }) {
  const [formData, setFormData] = useState({
    number: "",
    Password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));

    setFormData({
      number: "",
      Password: ""
    });

    setIsLogin(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login To Your Bank Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              📱 Mobile Number
            </label>
            <input
              type="text" 
              name="number"
              placeholder="Enter your mobile number"
              value={formData.number}
              onChange={handleChange}
              maxLength={10}
              pattern="[0-9]*"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              🔒 Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
