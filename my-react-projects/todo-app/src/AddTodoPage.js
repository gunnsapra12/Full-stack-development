function AddTodoPage() {
  return (
<div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10 space-y-6 border border-gray-200">
  <div className="space-y-4">
    <div>
      <label className="block text-gray-700 font-semibold mb-1">📝 Todo Title</label>
      <input
        type="text"
        placeholder="Enter todo title"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-1">📅 Due Date</label>
      <input
        type="date"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-1">✅ Status</label>
      <select
        disabled
        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
      >
        <option>select</option>
        <option value="pending">pending</option>
        <option value="completed">completed</option>
      </select>
    </div>
  </div>

  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Submit
    </button>
  </div>
</div>

  );
}
export default AddTodoPage;
