import React from 'react';
import {Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,} from 'recharts';
import {color, data} from "./utils/graphConfig";
import {Box} from "@mui/material";


const Featured = () => {
    return (
        <Box width={'100%'} height={'800px'}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5"/>
                    <XAxis dataKey="name" scale="band"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    {/*<Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8"/>*/}
                    {color.map(item =>{
                        return item.color? <Bar dataKey="pv" barSize={10}  fill="rgba(234, 59, 90, 0.4)"/>:
                            <Bar dataKey="pv" barSize={10} fill="rgba(21, 210, 143, 0.4)"/>
                    })}
                    <Line type="monotone" dataKey="uv" stroke="rgba(247, 78, 44, 1)" dot={false} activeDot={false}/>
                    {/*<Scatter dataKey="cnt" fill="red"/>*/}
                </ComposedChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default Featured;