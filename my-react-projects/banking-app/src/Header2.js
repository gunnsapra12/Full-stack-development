import {Link} from "react-router-dom" 

function Header2(){
    return(
        <div className="flex justify-center gap-4 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md py-4">
  <Link to="/" >
  <button className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition duration-200">
    Home
  </button>
  </Link>
  <Link to="/bank-detail" >
  <button className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition duration-200">
    Bank Detail
  </button>
  </Link>
  <Link to="/transfer" >
  <button className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition duration-200">
    Transfer
  </button>
  </Link>
  <Link to="/transaction" >
  <button className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition duration-200">
    Transaction
  </button>
  </Link>
  <Link to="/logout">
  <button className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition duration-200">
    Logout
  </button>
  </Link>
</div>

    )
}
export default Header2