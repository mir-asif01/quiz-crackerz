import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl my-4'>Three Questions Answer😊😊</h1>
            <div className='md:w-3/4 mx-auto'>
                <div className='border my-3 p-3'>
                    <h1 className='text-xl underline text-blue-300'>Q1 :- Purpose of React Router.</h1>
                    <p className='border-l-4 my-3 border-yellow-500'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>
                </div>
                <div className='border my-3 p-3'>
                    <h1 className='text-xl underline text-blue-300'>Q2 :- How does Context API Works?.</h1>
                    <p className='border-l-4 my-3 border-yellow-500'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>
                <div className='border my-3 p-3'>
                    <h1 className='text-xl underline text-blue-300'>Q1 :- What is "useRef" Hook in ReactJs.</h1>
                    <p className='border-l-4 my-3 border-yellow-500'>
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;