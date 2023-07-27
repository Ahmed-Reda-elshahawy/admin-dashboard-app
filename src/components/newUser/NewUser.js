import React from 'react';
import './newUser.scss';
import { Button } from '@mui/material';


const NewUser = (props) => {

    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='new-user'>
            <div className='model'>
                <h2>Add New User</h2>
                <span className='close' onClick={() => props.setOpen(false)}>x</span>
                <form onSubmit={handelSubmit}>
                    <div className='content'>
                        {props.columns
                            .filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "action")
                            .map((column) => (
                                <div className='item'>
                                    <label>{column.headerName}</label>
                                    <input type={column.type} placeholder={column.field} />
                                </div>
                            ))}
                    </div>
                    <Button variant="outlined" className='btn'>
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewUser;