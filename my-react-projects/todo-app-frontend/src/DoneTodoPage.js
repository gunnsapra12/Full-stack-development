import { callUpdateAPI } from "./BackendAPI";
import { callGetAllAPI } from "./BackendAPI";
function DoneTodoPage(props) {
  let todoArr = props.todo;
  async function handleClick(e, todoId) {

    await callUpdateAPI(
      '/update-todo',
      { status: 'pending', completionDate: null }, { 'todoId': todoId })
    let todoList = await callGetAllAPI('/read-todos');
    props.setTodo(todoList);
  }
  return (

    <div className="flex justify-center items-center h-[500px] bg-gradient-to-br from-pink-100 to-purple-200">
      <table className="border-collapse shadow-lg bg-white rounded-xl overflow-hidden text-gray-800 text-center">
        <thead>
          <tr className="bg-green-100">
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Todo title</th>
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Status</th>
            <th className="px-6 py-3 border border-gray-300 text-lg font-semibold">Completed Date</th>
        
        </tr>
        </thead>
          {
            todoArr.map((todo, index) => (
              todo.status == "completed" && (
                <tr key={todo.todoId} class="hover:bg-gray-100 transition">
                  <td className="px-6 py-2 border border-gray-300">{todo.todoTitle}</td>
                  <td className="px-6 py-2 border border-gray-300 capitalize text-green-600 font-medium">{todo.status}</td>
                  <td className="px-6 py-2 border border-gray-300">{new Date(todo.completionDate).toLocaleDateString()}</td>
                  <td className="px-6 py-2 border border-gray-300">
                    <button
                      onClick={(e) => handleClick(e, todo.todoId)}
                      className="bg-blue-100 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition"
                    >
                      ↩
                    </button>
                  </td>
                </tr>
              )
            ))
          }

      </table>
    </div>


  )
}
export default DoneTodoPage;