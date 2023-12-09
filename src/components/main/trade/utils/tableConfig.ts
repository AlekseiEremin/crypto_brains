import {GridColDef} from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
        field: 'coinName',
        headerName: 'Coin Name',
        width: 150,
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        flex: 1
    },
    {
        field: 'change',
        headerName: '24h Change',
        width: 150,
        flex: 1
    },
    {
        field: 'volume',
        headerName: '24h Volume',
        width: 150,
        flex: 1
    },
    {
        field: 'high',
        headerName: '24h High',
        width: 150,
        flex: 1
    },
    {
        field: 'marketCap',
        headerName: 'Market Cap',
        width: 150,
        flex: 1
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        flex: 1
    },
];