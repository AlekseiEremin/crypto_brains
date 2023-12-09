import React from 'react';
import {Box} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {data} from "../../../mock/data";
import {columns} from "./utils/tableConfig";

const TradingTable = () => {
    return (
        <Box sx={{height: 1700, width: '100%'}}>
            <DataGrid
                sx={{
                    '& .MuiDataGrid-cell ': {
                        border: 'none'
                    },
                    '& .MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                        outline: 'none !important'
                    }
                }}
                rows={data}
                columns={columns}
                rowSelection={false}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 30,
                        },
                    },
                }}
                pageSizeOptions={[10, 15, 30]}
                checkboxSelection={false}
                disableRowSelectionOnClick
                disableColumnSelector
            />
        </Box>
    );
};

export default TradingTable;