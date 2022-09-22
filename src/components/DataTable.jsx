import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

function DataTable() {
    const [tableData, setTableData] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:4000/user")
        .then(
            res => setTableData(res.data))
        .catch(err=>console.log(err))
        
    },[])
    const columns = [
        {
          title: 'username',
          dataIndex: 'username',
          key: 'username',
        //   render: (text) => <a>{text}</a>,
        },
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email',
        },
       
          
               
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
  
    
      
    return (
        <>
           
            <Table dataSource={tableData} columns={columns} />;
                 


        </>
    );
   


}

export default DataTable;