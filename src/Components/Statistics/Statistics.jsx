import React from 'react';
import { useLoaderData } from 'react-router-dom';


import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadedData = useLoaderData();
    const data = loadedData.data;
    return (
        <div>
            <h1 className='text-2xl my-5'>Questions on each Topic. </h1>
            <div className='bg-gray-200'>
                <ResponsiveContainer height={300}>
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="total" fill="#8884d8" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;