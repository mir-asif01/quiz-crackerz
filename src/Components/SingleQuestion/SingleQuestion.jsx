import React from 'react';

const SingleQuestion = ({ qst }) => {

    const { question, correctAnswer, options } = qst;
    return (
        <div className='bg-blue-200 p-3 rounded-md my-3 md:mx-5'>
            <div>
                <h1 className='text-xl'>Question : {question} <small className='bg-green-400 p-1 rounded-sm'><button>Ans</button></small></h1>
            </div>
            <div className='flex justify-evenly items-center my-5'>
                {
                    options.map(opt => <button className='p-3 rounded-md bg-green-100 m-1'>{opt}</button>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;