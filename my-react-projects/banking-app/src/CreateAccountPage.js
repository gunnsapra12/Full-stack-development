import { useState } from "react";

function CreateAccountPage(props) {
  let isLogin = props.isLogin;
  let setIsLogin = props.setAccount;

  let [formData, setFormData] = useState({
    Name: "",
    number: "",
    Branch: "",
    Password: ""
  });

  function handleChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [inputName]: inputValue
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));

    setIsLogin((previousAccounts) => [
      ...previousAccounts,
      {
        id: Date.now(),
        Name: formData.Name,
        number: formData.number,
        Branch: formData.Branch,
        Password: formData.Password
      }
    ]);

    // Clear form after submission
    setFormData({
      Name: "",
      number: "",
      Branch: "",
      Password: ""
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 p-6">
      {formData.Name}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          🏦 Create your Bank Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter your mobile no."
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Select Branch
            </label>
            <select
              name="Branch"
              value={formData.Branch}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            >
              <option value="">Select your bank branch</option>
              <option value="Delhi">Delhi</option>
              <option value="Panipat">Panipat</option>
              <option value="Rohtak">Rohtak</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Jind">Jind</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your unique Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;