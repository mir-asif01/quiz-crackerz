import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizPage = () => {
    const data = useLoaderData()
    const questions = data.data.questions

    const [right,setRight] = useState(0);
    const [wrong,setWrong] = useState(0);
    const [tryCount , setTryCount] = useState(0)
    return (
        <div>
            <div className='bg-gray-200 md:w-2/4 w-full mx-auto my-5 p-4 '>
                <h1 className='text-green-500 text-xl'>Right Answers : {right}</h1>
                <h1 className='text-red-500 text-xl'>Wrong Answers : {wrong}</h1>
                <h1 className='text-xl'>Total Attempts : {tryCount} {tryCount>1 ? 'times' : 'time'}</h1>
            </div>
            {
                questions.map(qst => <SingleQuestion key={qst.id} qst={qst} right={right} setRight={setRight} wrong={wrong} setWrong={setWrong} tryCount={tryCount}
                    setTryCount={setTryCount}></SingleQuestion>)
            }
        </div>
    );
};
export default QuizPage;