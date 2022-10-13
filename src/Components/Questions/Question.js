import React, { useEffect, useState } from 'react';
import fs from 'fs';
import path  from 'path';
import Compiler from "../Compiler/Compiler.js";

const Questions =() => {
    const [input, setInput] = useState(' ');
    useEffect(() => {
        // const inputPath = path.resolve(__dirname+'/input/sum.txt')
        // console.log(inputPath)
        // setInput(fs.readFileSync(inputPath))
        // console.log(input)
        setInput(`30
        2 3
        3 5
        56 33
        62 77
        71 70
        25 62
        2 3
        14 70
        97 67
        100 66
        43 65
        92 23
        0 81
        100 41
        64 38
        24 66
        49 22
        90 38
        22 52
        84 50
        73 40
        54 54
        13 77
        84 85
        9 79
        40 65
        14 68
        17 26
        2 5
        47 67
        `)
    
    }, [])
    
    return (
        <>
        <div className='container'>
        <h2>Find the sum of the two numbers</h2>
        <h3><b>Description</b></h3>
        <p>Given an the two number and you have to find the sum of two number</p>
        <pre><strong>Input:</strong>
        N1 = 1
        N2 = 2</pre>
        <pre><strong>Output :</strong> 3
        <strong>Explanation :</strong>
        The sum of two number is 1 + 2</pre>
        </div>

        <div>
        <Compiler />
        </div>

        </>
    )
}

export default Questions;