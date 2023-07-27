import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { areaData } from '../../Data';
import './areaBox.scss';

const AreaBox = () => {
    return (
        <div className='area-box'>
            <h2>Revenue Analytics</h2>
            <div className='chart'>
                <ResponsiveContainer width="99%" height={300}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={areaData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaBox;