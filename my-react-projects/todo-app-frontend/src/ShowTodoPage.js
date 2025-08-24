import { callGetAllAPI, callUpdateAPI, callDeleteAPI } from "./BackendAPI";

function ShowTodoPage(props) {

  let todoArr = props.todo;
  console.log(JSON.stringify(todoArr))

  async function handleClick(e, todoId) {

    await callUpdateAPI(
      '/update-todo',
      { status: 'completed', completionDate: new Date() }, { 'todoId': todoId })
    let todoList = await callGetAllAPI('/read-todos');
    props.setTodo(todoList);
  };
  async function handleDeleteClick(e, todoId) {

    await callDeleteAPI(
      '/delete-todo',
      { 'todoId': todoId })
    let todoList = await callGetAllAPI('/read-todos');
    props.setTodo(todoList);
  };

  return (
    <div className="flex justify-center items-center h-[500px] bg-gradient-to-br from-pink-100 to-purple-200">
      <table className="border-collapse shadow-xl bg-white rounded-xl overflow-hidden text-gray-800">
        <thead>
          <tr className="bg-purple-100 text-left">
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Todo Title</th>
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Due Date</th>
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Mark Done</th>
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            todoArr.map((todo, index) => (
              todo.status == "pending" && (
                <tr key={todo.todoId} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-2 border border-gray-300">{todo.todoTitle}</td>

                  <td className="px-6 py-2 border border-gray-300">
                    <span className="mr-4">{todo.dueDate}</span>
                  </td>

                  <td className="px-6 py-2 border border-gray-300">
                    <button
                      onClick={(e) => handleClick(e, todo.todoId)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm transition"
                    >
                      ✅
                    </button>
                  </td>

                  <td className="px-6 py-2 border border-gray-300">
                    <button
                      onClick={(e) => handleDeleteClick(e, todo.todoId)}
                      className="bg-blue-100 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition"
                    >
                      ❌
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