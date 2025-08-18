function ShowTodoPage(props) {

    let todoArr = props.todo;

    function handleClick(e, todoId) {
        let newTodoArr = []
        for (let i = 0; i < todoArr.length; i++) {
            newTodoArr[i] = todoArr[i]

            if (todoArr[i].id == todoId) {
                newTodoArr[i].status = "completed";
                newTodoArr[i].completedDate = new Date()
            }
        }
        props.setTodo(newTodoArr);
    }

    return (
        <div className="flex justify-center items-center h-[500px] bg-gradient-to-br from-pink-100 to-purple-200">
  <table className="border-collapse shadow-xl bg-white rounded-xl overflow-hidden text-gray-800">
    <thead>
      <tr className="bg-purple-100 text-left">
        <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Todo Title</th>
        <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Due Date</th>
        <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Mark Done</th>
      </tr>
    </thead>
    <tbody>
      {
        todoArr.map((todo, index) => (
          todo.status == "pending" && (
            <tr key={todo.id} className="hover:bg-gray-100 transition">
              <td className="px-6 py-2 border border-gray-300">{todo.todoTitle}</td>
              <td className="px-6 py-2 border border-gray-300">{todo.status}</td>
              <td className="px-6 py-2 border border-gray-300 flex justify-center">
                <span className="mr-4">{todo.dueDate}</span>
                <button 
                  onClick={(e) => handleClick(e, todo.id)} 
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm transition"
                >
                  ✅
                </button>
              </td>
            </tr>
          )
        ))
      }
    </tbody>
  </table>
</div>

    )
}
export default ShowTodoPage;