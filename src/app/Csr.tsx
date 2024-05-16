'use client'

import { useState } from 'react';

const Csr = () => {
    const [count, setCount] = useState(0);
    const addOne = () => {
        console.log(count);
        setCount(count + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={addOne}>increase</button>
        </div>
    );
};

export default Csr;