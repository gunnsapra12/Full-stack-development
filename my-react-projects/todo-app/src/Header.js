function Header() {
    return (
<div class="bg-white py-4 shadow-sm border-b border-gray-200">
    <header>
        <nav class="flex justify-center gap-6">
            <button class="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition">
                Add
            </button>
            <button class="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
                Show
            </button>
            <button class="bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition">
                Done
            </button>
        </nav>
    </header>
</div>


    )
}
export default Header;