import { useNavigate } from "react-router-dom";
function LogoutPage(props){
    const navigate=useNavigate();
   function handleLogout(){
     props.setIsLogin(false);
     navigate("/login")
   }
   
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-200 p-6">
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm border border-gray-200 text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
            🚪 Logout from Your Bank Account
        </h1>

        <button type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-200 shadow-md" onClick={handleLogout}>
            Logout
        </button>
    </div>
</div>

    )
}
export default LogoutPage;