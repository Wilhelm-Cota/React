import { useState } from "react";
import MyFacts from "./MyFacts";
import { v4 as uuidv4 } from 'uuid';

function ArrayState(){
    const [fact, setFact] = useState('');
    const [facts, setFacts] = useState([
        {
            id: 1,
            fact: "You become strong and better by practicing!",
            likes: 0
        },
        {
            id: 2,
            fact: "Only win if you loose!",
            likes: 0
        }
    ]);
    function handleFactChange(e){
        console.log(e);
        setFact(e.target.value);
    }
    function handleFactSubmission(){
        const myfact ={
            fact: fact,
            id:  uuidv4(),
            likes: 0
        }
        setFacts([...facts,myfact])
    }
    return <div>
        <h1>True Facts</h1>
        <input onChange={handleFactChange}/>
        <button onClick={handleFactSubmission}>Add Fact</button>
        <div>
            {
               facts.map((fact) =>{
                return(
                    <MyFacts id={fact.id} fact={fact.fact} like={fact.likes}/>
                )
               })
            }
        </div>
    </div>;
}
export default ArrayState;