import React from 'react';
import { topDealUsers } from '../../Data';
import './topDeals.scss';

const TopDeals = () => {
    return (
        <div className='topDeals'>
            <h1 className='topDeals-title'>Top Deals</h1>
            {
                topDealUsers.map(user => {
                    return (
                        <div className='user-item' key={user.id}>
                            <div className='info'>
                                <img src={user.img} alt='' />
                                <div className='user-info'>
                                    <span className='username'>{user.username}</span>
                                    <span className='email'>{user.email}</span>
                                </div>
                            </div>
                            <div className='money'>${user.amount}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default TopDeals;