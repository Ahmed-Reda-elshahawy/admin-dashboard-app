import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './pieChartBox.scss';

const PieChartBox = () => {

    const data = [
        { name: 'Group A', value: 400, color: '#0088FE' },
        { name: 'Group B', value: 300, color: '#00C49F' },
        { name: 'Group C', value: 300, color: '#FFBB28' },
        { name: 'Group D', value: 200, color: '#FF8042' },
    ];

    return (
        <div className='pie-box'>
            <h2>Leads by source</h2>
            <div className='chart-box'>
                <div className='chart'>
                    <ResponsiveContainer width='100%' height={400}>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={"70%"}
                                outerRadius={"90%"}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((item) => (
                                    <Cell key={`cell-${item.name}`} fill={item.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ border: "none", borderRadius: "10px", backgroundColor: "white" }}
                                labelStyle={{ display: "none" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='colors'>
                    {
                        data.map(item => {
                            return (
                                <div className='item' key={item.name}>
                                    <div className='item-info'>
                                        <div className='item-color' style={{ backgroundColor: item.color }}></div>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className='item-value'>
                                        <span>{item.value}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default PieChartBox;