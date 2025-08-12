function BankDetailPage() {
    return (
 <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 p-6">
    <div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg border border-gray-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            💳 Your Account Details
        </h2>

        <div class="overflow-x-auto">
            <table class="w-full border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                    <tr class="bg-gray-100">
                        <th class="text-left px-4 py-2 font-semibold text-gray-700">Name</th>
                        <td class="px-4 py-2 text-gray-600">Shyam Devi</td>
                    </tr>
                    <tr>
                        <th class="text-left px-4 py-2 font-semibold text-gray-700">Number</th>
                        <td class="px-4 py-2 text-gray-600">12738XXX</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <th class="text-left px-4 py-2 font-semibold text-gray-700">Branch</th>
                        <td class="px-4 py-2 text-gray-600">HDFC Panipat</td>
                    </tr>
                    <tr>
                        <th class="text-left px-4 py-2 font-semibold text-gray-700">Balance</th>
                        <td class="px-4 py-2 text-gray-600">₹100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

    )

}
export default BankDetailPage;