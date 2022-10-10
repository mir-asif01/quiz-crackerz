import React from 'react';

const SingleQuestion = ({qst}) => {
    const {question,correctAnswer,options} = qst;
    return (
        <div className='bg-blue-200 p-3 rounded-md my-3'>
            <h1 className=''>{question}</h1>
        </div>
    );
};

export default SingleQuestion;