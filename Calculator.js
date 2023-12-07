import { useState } from "react";
function Calculator(){
    const [state, setState] = useState({count: 4, theme: 'red'});

    function decrease(){
        setState(preCount => {
            return {
                ...preCount, count:preCount.count -1,
                
            };
        });
    }
    function increase(){
        setState(preCount => {
            return {
                ...preCount, count:preCount.count + 1
            };
        });
    }
    return <div>
        <button onClick={decrease}>-</button>
        <span>{state.count}{state.theme}</span>
        <button onClick={increase}>+</button>
    </div>;
}
export default Calculator;