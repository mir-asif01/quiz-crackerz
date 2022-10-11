import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadedData = useLoaderData();
    const data = loadedData.data;
    return (
        <div>
            <h1 className='text-2xl my-5'>Questions on each Topic. </h1>
            <div className='bg-gray-200'>
                <ResponsiveContainer height={300}>
                    <LineChart height={500} width={500} data={data} className="w-100 md:w-auto">
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;