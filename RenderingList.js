import { useState } from "react";
import RenderingList2 from "./RenderingList2";

function RenderingList(){
    const [list1, setList1] = useState([
        {
            myname : "Paulus",
            age : 23,
            role : "Software developer"
    },
    {
        myname : "Wilhelm",
        age : 14,
        role : "Graphic Designer"
},
{
    myname : "Mark",
    age : 46,
    role : "IT Technician"
},
{
    myname : "John",
    age : 56,
    role : "Supervisor"
},
]);
    return <div>
        {
            list1.map(list =><RenderingList2 list={list}/>)
        }
    </div>
}
export default RenderingList;