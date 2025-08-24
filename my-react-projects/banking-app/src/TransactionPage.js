function TransactionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-gray-200">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📄 Your Bank Transactions
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">S.No</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Date</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Amount</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Transfer Type</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">10-08-2025</td>
                <td className="px-4 py-2 text-gray-600">₹500</td>
                <td className="px-4 py-2 text-gray-600">Credit</td>
                <td className="px-4 py-2 text-gray-600">TXN12345</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 text-gray-600">2</td>
                <td className="px-4 py-2 text-gray-600">09-08-2025</td>
                <td className="px-4 py-2 text-gray-600">₹200</td>
                <td className="px-4 py-2 text-gray-600">Debit</td>
                <td className="px-4 py-2 text-gray-600">TXN67890</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default TransactionPage;
