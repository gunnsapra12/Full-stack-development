import {Link} from "react-router-dom";
function Header1() {
    return (
        <div>
            <header class="bg-gradient-to-r from-purple-300 via-blue-200 to-green-200 shadow-md">
                <nav class="flex justify-between items-center px-8 py-4">

                    <div>
                        <Link to="/">
                        <button class="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 hover:scale-105 transition-all duration-200">
                            Home
                        </button>
                        </Link>
                    </div>

 
                    <div class="flex space-x-6">
                        <Link to ="/create-account">
                        <button class="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 hover:scale-105 transition-all duration-200">
                            Create Account
                        </button>
                        </Link>
                        <Link to ="/login">
                        <button class="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 hover:scale-105 transition-all duration-200">
                            Login
                        </button>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>

    );
}
export default Header1; 