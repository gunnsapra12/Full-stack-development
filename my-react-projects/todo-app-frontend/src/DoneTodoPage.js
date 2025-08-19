function DoneTodoPage(props) {
    let todoArr = props.todo;
    return (

        <div class="flex justify-center items-center h-[500px] bg-gradient-to-br from-pink-100 to-purple-200">
  <table class="border-collapse shadow-lg bg-white rounded-xl overflow-hidden text-gray-800 text-center">
    <thead>
      <tr class="bg-green-100">
        <th class="px-6 py-3 border border-gray-300 text-lg font-semibold">Todo title</th>
        <th class="px-6 py-3 border border-gray-300 text-lg font-semibold">Status</th>
        <th class="px-6 py-3 border border-gray-300 text-lg font-semibold">Completed Date</th>
      </tr>
    </thead>

    {
      todoArr.map((todo, index) => (
        todo.status == "completed" && (
          <tr key={todo.id} class="hover:bg-gray-100 transition">
            <td class="px-6 py-2 border border-gray-300">{todo.todoTitle}</td>
            <td class="px-6 py-2 border border-gray-300 capitalize text-green-600 font-medium">{todo.status}</td>
            <td class="px-6 py-2 border border-gray-300">{new Date (todo.completionDate).toLocaleDateString()}</td>
          </tr>
        )
      ))
    }

  </table>
</div>


    )
}
export default DoneTodoPage;