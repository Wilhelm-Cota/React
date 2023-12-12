import { useState } from "react";

function Conditional(){
   const [render1, setRender1] = useState(false);
   const [render2, setRender2] = useState(false);
 return <div>
    <div><button onClick={()=>setRender1(!render1)}>Render 1</button></div>
    <div><button onClick={()=>setRender2(!render2)}>Render 2</button></div>
    {render1 && <div>I am rendering this Conditionally1</div>}
    {render2 ? <div>This is condition 2</div>: <div>Do you want to render element 2</div>}
    
 </div>
}
export default Conditional;