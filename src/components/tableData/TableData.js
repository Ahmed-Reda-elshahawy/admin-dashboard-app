import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './tableData.scss';
import { Box } from '@mui/material';

const TableData = (props) => {

    return (

        <div className='table-data' >
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid className='dataGrid' style={{ backgroundColor: "white", padding: "10px" }}
                    rows={props.rows}
                    columns={props.columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 7,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 }
                        }
                    }}
                    pageSizeOptions={[6]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
};

export default TableData;