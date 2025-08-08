function CreateAccountPage(){
    return(
       <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 p-6">
  <div class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
    
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">
      🏦 Create your Bank Account
    </h2>
    
    <form class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-1">Name</label>
        <input type="text" placeholder="Enter your Name" 
               class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Mobile Number</label>
        <input type="number" placeholder="Enter your mobile no."
               class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Select Branch</label>
        <select class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none">
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
        <label class="block text-gray-700 font-medium mb-1">Password</label>
        <input type="password" placeholder="Enter your unique Password"
               class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"/>
      </div>

      <button type="submit" 
              class="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200">
        Submit
      </button>
    </form>

  </div>
</div>

    )
}
export default CreateAccountPage;