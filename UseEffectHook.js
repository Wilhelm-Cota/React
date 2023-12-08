import axios from "axios";
import { useEffect, useState } from "react";

function UseEffectHook(){
    const [todos, setTodos] = useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
            console.log(res.data);
            setTodos(res.data);
        }).catch(()=>{

        });
    },[]);

    return <div>
        <h1>ToDo List</h1>
        <div>
            {todos.map((todo)=>{
                const {id, userId,title} = todo;
                return(
                    <div >
                        <h4>{title}</h4>
                        <h6>Asssigned to user: {userId}</h6>
                    </div>
                );
            })}
        </div>
    </div>
}
export default UseEffectHook;