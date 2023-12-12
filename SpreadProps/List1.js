import Data from "./Data";

function List1(){
    const data = {
        myName: 'Tomas',
        age: 23,
        role: "Software Developer"
    }
    return <div>
        <h1>List of Data</h1>
        <Data {...data}/>
    </div>
}
export default List1;