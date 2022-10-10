import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const SingleQuestion = ({ qst }) => {
    let count = 0;

    const { question, correctAnswer, options } = qst;
    const [show,showAnswer] = useState(false);

    const handleChoiceBtn = (opt) =>{
        if(opt === correctAnswer ){
            alert("Correct Answer");
            return ;
        }
        else{
            alert('Wrong Answer');
            return;
        }
    }
    return (
        <div className='bg-blue-200 p-3 rounded-md my-3 md:mx-5'>
            <div>
                <h1 className='text-xl'>Question : {question} <small><button onClick={()=>showAnswer(!show)}><EyeIcon className="h-4 w-4 text-black "/></button></small></h1>
            </div>
            <div className='bg-green-400'>
                {
                    show ? <h1>Answer : {correctAnswer}</h1> : ' '
                }
            </div>
            <div className='flex justify-evenly items-center my-5'>
                {
                    options.map(opt => <button key={count++} onClick={()=>handleChoiceBtn(opt)} className='p-3 rounded-md bg-green-100 m-1'>{opt}</button>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;