import {Link} from 'react-router-dom'

function Header() {
    return (
   <div class="bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-200">
    <div class="flex justify-between items-center">
        <Link to="./home">
        <button class="text-xl font-bold text-gray-700 hover:text-blue-900 transition duration-200">
            Home
        </button>
        </Link>
        <div class="flex space-x-6">
            <Link to="./profile">
            <button class="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-200">
                Profile
            </button>
            </Link>
            <Link to ="./friends">
            <button class="text-xl font-bold text-gray-700 hover:text-blue-600 transition duration-200">
                My Friend
            </button>
            </Link>
        </div>
    </div>
</div>



    )
}
export default Header;
