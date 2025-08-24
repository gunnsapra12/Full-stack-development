import { Link } from "react-router-dom";
function LoginPage(){
 return(
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-300">
  <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h2>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Enter your Gmail</label>
      <input 
        type="text" 
        placeholder="Name" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">Enter your Password</label>
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>

    <button 
      type="submit" 
      className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

 )
}
export default LoginPage;