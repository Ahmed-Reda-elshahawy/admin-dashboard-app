import { Button } from '@mui/material';
import React, { useState } from 'react';
import TableData from '../../components/tableData/TableData';
import './users.scss';
import { userRows } from '../../Data';
import { Link } from 'react-router-dom';
import NewUser from '../../components/newUser/NewUser';

const Users = () => {

    const [users, setUsers] = useState(userRows);
    console.log(users);

    const handelDelete = (id) => {
        console.log(id, "has been deleted");
        let newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "img",
            headerName: "Avatar",
            width: 100,
            renderCell: (params) => {
                return <img src={params.row.img || "/noavatar.png"} alt="" />;
            },
            type: 'string',
        },
        {
            field: "firstName",
            type: "string",
            headerName: "First name",
            width: 130,
        },
        {
            field: "lastName",
            type: "string",
            headerName: "Last name",
            width: 130,
        },
        {
            field: "email",
            type: "string",
            headerName: "Email",
            width: 200,
        },
        {
            field: "phone",
            type: "string",
            headerName: "Phone",
            width: 120,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 120,
            type: "string",
        },
        {
            field: "verified",
            headerName: "Verified",
            width: 120,
            type: "boolean",
        },
        {
            field: "action",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='actions'>
                        <Link to={`/users/${params.row.id}`}>
                            <div className='view'>
                                <img src='view.svg' alt='view-icon' />
                            </div>
                        </Link>
                        <div className='delete' onClick={() => handelDelete(params.row.id)}>
                            <img src='delete.svg' alt='delete-icon' />
                        </div>
                    </div>
                );
            },
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='users'>
            <div className='users-info'>
                <h1>Users</h1>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    Add New User
                </Button>
            </div>
            <div className='users-data'>
                <TableData columns={columns} rows={users} />
            </div>
            {open && <NewUser setOpen={setOpen} columns={columns} />}
        </div>
    );
};

export default Users;