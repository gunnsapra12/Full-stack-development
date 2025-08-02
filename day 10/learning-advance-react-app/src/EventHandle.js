function handleClick(){
   alert("button clicked");

}
function handleFormSubmit() {
    alert("your form is submitted");
}
function EventHandle() {
    return (
        <div>
            <button onClick={() => handleClick()}>click</button>
            <br></br>
            <form onSubmit={() => handleFormSubmit()}>
                <label>enter your name</label>
                <input type="string" required /> <br />
                <button> submit form </button>
            </form>
        </div>
    )
}
export {EventHandle}