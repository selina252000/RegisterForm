import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable(props) {
    const [tableData, setTableData] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:4000/user").then(res=>setTableData(res.data)).catch(err=>console.log(err))
        
    },[])
    return (
        <>
            {console.log(tableData)}
        </>
    );
}

export default DataTable;