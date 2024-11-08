"use client";
import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>counter : {count}</h1>
            <button className='btn btn-success' onClick={()=>setCount(count + 1)}>increase</button>
            <button className='btn btn-success' onClick={()=>setCount(count - 1)}>decrease</button>
        </div>
    );
};

export default Counter;