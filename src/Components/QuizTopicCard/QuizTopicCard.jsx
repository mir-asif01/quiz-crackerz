import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopicCard = ({ topic }) => {
    const { id, name, logo ,total } = topic;
    return (
        <div className='bg-green-200 my-7 mx-2 md:my-0 p-2 rounded-md'>
            <img src={logo} alt="" />
            <div className='justify-evenly items-center'>
                <h1 className='text-xl'>{name}</h1>
                <h1 className='text-xl'>{total} Questions</h1>
            </div>
            <Link to={`/quiz/${id}`}><button className='bg-cyan-500 py-1 px-4 my-4 font-semibold text-white rounded-md'>Answer</button></Link>
        </div>
    );
};

export default QuizTopicCard;