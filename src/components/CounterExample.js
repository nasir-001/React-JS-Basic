import React, { useState } from 'react';

function CounterExample(){
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h1 className="text-4xl">
                {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)} className="text-4xl">
                Plus
            </h1>
            <h1 onClick={() => setCount(count - 1)} className="text-4xl">
                Minus
            </h1>
        </div>
    )
}

export default CounterExample;