import { Button } from '@mui/material';
import React, { useState } from 'react';
import TableData from '../../components/tableData/TableData';
import NewUser from '../../components/newUser/NewUser';
import { products } from '../../Data';
import './products.scss';
import { Link } from 'react-router-dom';

const ProductsList = () => {

    const handelDelete = (id) => {
        console.log(id, "has been deleted");
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "img",
            headerName: "Image",
            width: 80,
            renderCell: (params) => {
                return <img src={params.row.img || "/noavatar.png"
                } alt="" />;
            },
        },
        {
            field: "title",
            type: "string",
            headerName: "Title",
            width: 250,
        },
        {
            field: "color",
            type: "string",
            headerName: "Color",
            width: 100,
        },
        {
            field: "price",
            type: "string",
            headerName: "Price",
            width: 120,
        },
        {
            field: "producer",
            headerName: "Producer",
            type: "string",
            width: 100,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 150,
            type: "string",
        },
        {
            field: "inStock",
            headerName: "In Stock",
            width: 130,
            type: "boolean",
        },
        {
            field: "action",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='actions'>
                        <Link to={`/products/${params.row.id}`}>
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
        <div className='products'>
            <div className='users-info'>
                <h1>Products</h1>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    Add New Product
                </Button>
            </div>
            <div className='users-data'>
                <TableData columns={columns} rows={products} />
            </div>
            {open && <NewUser setOpen={setOpen} columns={columns} />}
        </div>
    );
};

export default ProductsList;