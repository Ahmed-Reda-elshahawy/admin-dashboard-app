import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barCharBox.scss';


const BarChartBox = (props) => {
    return (
        <div className='bar-chart'>
            <h3>{props.chartData.title}</h3>
            <div className='chart'>
                <ResponsiveContainer width="99%" height={120}>
                    <BarChart width={150} height={40} data={props.chartData.chartData}>
                        <Bar dataKey={props.chartData.dataKey} fill={props.chartData.color} />
                        <Tooltip
                            contentStyle={{ background: "#2a3447", border: "none", borderRadius: "10px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartBox;