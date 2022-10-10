import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopicCard from '../QuizTopicCard/QuizTopicCard'

const Questions = () => {
    const topicsObj = useLoaderData();
    const topics = topicsObj.data;
    console.log(topics);
    return (
        <div>
            <div className='bg-gray-100 py-7 px-10'>
                <h1 className='text-xl underline'>Enrich Your Front-End coding konowledge With Us📳</h1>
                <p><span className='text-yellow-600'>JavaScript</span>,often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. <br />
                    <span className='text-cyan-400'>React</span>,React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.<br />
                    <span className='text-blue-300'>CSS</span>,Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. <br />
                    <span className='text-orange-500'>Git</span>,is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
                </p>
            </div>
            <div className='grid md:grid-cols-4 md:p-7 sm:p-3'>
                {
                    topics.map(topic=> <QuizTopicCard key={topic.id} topic={topic}></QuizTopicCard>)
                }
            </div>
        </div>
    );
};

export default Questions;