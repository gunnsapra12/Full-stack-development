function VariableInJsx(){
    let name="gunn"
    let address="rohtak"

    return(
        <div>
            {/*accessing variable in jsx in curly braces*/}
            <h1>my name is {name}</h1>
            <h2>my address is {address}</h2>
        </div>
    );
}
export { VariableInJsx }