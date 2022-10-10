import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizPage = () => {
    const data = useLoaderData()
    const questions = data.data.questions
    return (
        <div>
            {
                questions.map(qst=><SingleQuestion key={qst.id} qst={qst} ></SingleQuestion>)
            }
        </div>
    );
};
export default QuizPage;