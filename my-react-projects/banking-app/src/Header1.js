function Header1() {
    return (
        <div>
            <header class="bg-gradient-to-r from-purple-300 via-blue-200 to-green-200 shadow-md">
                <nav class="flex justify-between items-center px-8 py-4">

                    <div>
                        <button class="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 hover:scale-105 transition-all duration-200">
                            Home
                        </button>
                    </div>


                    <div class="flex space-x-6">
                        <button class="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 hover:scale-105 transition-all duration-200">
                            Create Account
                        </button>
                        <button class="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 hover:scale-105 transition-all duration-200">
                            Login
                        </button>
                    </div>
                </nav>
            </header>
        </div>

    );
}
export default Header1; 