import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://blackcoffer-server.vercel.app/data')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='flex items-center justify-center mt-16'>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="intensity" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="likelihood" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="relevance" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="start_year" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="country" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="topic" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="region" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="topic" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-gray-200 text-base-content">
                    <li><Link>Sidebar Item 1</Link></li>
                    <li><Link>Sidebar Item 2</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;