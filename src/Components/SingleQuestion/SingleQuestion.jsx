import React, { useState } from 'react';

const SingleQuestion = ({ qst }) => {

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
                <h1 className='text-xl'>Question : {question} <small className='bg-green-400 p-1 rounded-sm'><button onClick={()=>showAnswer(!show)}>Ans</button></small></h1>
            </div>
            <div className='bg-amber-400'>
                {
                    show ? <h1>Answer : {correctAnswer}</h1> : ' '
                }
            </div>
            <div className='flex justify-evenly items-center my-5'>
                {
                    options.map(opt => <button onClick={()=>handleChoiceBtn(opt)} className='p-3 rounded-md bg-green-100 m-1'>{opt}</button>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;