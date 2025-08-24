function TransferPage() {
    function handleSubmit(e) {
    e.preventDefault(); // stop page refresh
    alert("Money transferred! ✅");
  }
    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-200 p-6">
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            💸 Transfer Money Between Accounts
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-700 font-medium mb-1">From Account</label>
                <input type="number" placeholder="Enter your account no."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1">To Account</label>
                <input type="number" placeholder="Enter receiver's account no."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-1">Amount</label>
                <input type="number" placeholder="Enter amount you want to send"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>

            <div>
                <button type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>

    )


}
export default TransferPage;