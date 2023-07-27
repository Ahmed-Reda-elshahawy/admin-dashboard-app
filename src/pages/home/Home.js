import React from 'react';
import './Home.scss';
import TopDeals from '../../components/topDeals/TopDeals';
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } from '../../Data';
import Linechart from '../../components/lineChart/LineChart';
import BarChartBox from '../../components/barchart/BarChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import AreaBox from '../../components/stackedAreaBox/AreaBox';


const Home = () => {
    return (
        <div className='home'>
            <div className='box box1'><TopDeals /></div>
            <div className='box box2'><Linechart chartData={chartBoxUser} /></div>
            <div className='box box3'><Linechart chartData={chartBoxProduct} /></div>
            <div className='box box4'><PieChartBox /></div>
            <div className='box box5'><Linechart chartData={chartBoxRevenue} /></div>
            <div className='box box6'><Linechart chartData={chartBoxConversion} /></div>
            <div className='box box7'><AreaBox /></div>
            <div className='box box8'><BarChartBox chartData={barChartBoxVisit} /></div>
            <div className='box box9'><BarChartBox chartData={barChartBoxRevenue} /></div>
        </div>
    );
};

export default Home;