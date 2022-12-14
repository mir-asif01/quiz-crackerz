import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = ({ qst , right , setRight , wrong , setWrong,tryCount,setTryCount}) => {
    let count = 0;

    // const toast= "Wow so easy!";
    const { question, correctAnswer, options } = qst;
    const [show,showAnswer] = useState(false);

    const handleChoiceBtn = (opt) =>{
        setTryCount(tryCount + 1);
        if(opt === correctAnswer ){
            toast("Wow Correct Answer✔✔✔✔");
            setRight(right+1)
        }
        else{
            toast("Sorry! Wrong Answer❌❌❌");
           setWrong(wrong+1)
        }
    }
    // setRight(right)
    // setWrong(wrong)
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
            <div className='flex flex-col md:flex-row justify-evenly items-center my-5'>
                {
                    options.map(opt => <button type='radio' key={count++} onClick={()=>handleChoiceBtn(opt)} className='p-3 rounded-md bg-green-100 m-1'>{opt}</button>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleQuestion;