import React from 'react';
import { menu } from '../../Data';
import { Link } from 'react-router-dom';
import './menu.scss'

const Menu = () => {
    return (
        <div className='menu'>
            {
                menu.map((item) => {
                    return (
                        <div className='item' key={item.id}>
                            <h4 className='item-title'>{item.title}</h4>
                            {item.listItems.map((listItem) => (
                                <Link to={listItem.url} className='list-item' key={listItem.id}>
                                    <img src={listItem.icon} alt='' />
                                    <span className='listItem-title'>{listItem.title}</span>
                                </Link>
                            ))}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Menu;