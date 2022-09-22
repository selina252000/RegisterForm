import React from 'react';
import {  Routes, Route} from "react-router-dom";
import Registerform from '../components/Registerform';
import Loginform from '../components/Loginform';
import DataTable from '../components/DataTable';
// import User from '../components/user';


function App(props) {
    return (
        <Routes>
            <Route path="/" element={<Registerform/>}></Route>
            <Route path="/login" element={<Loginform/>}></Route>
            <Route path="/dataTable" element={<DataTable/>}></Route>
            {/* <Route path ="/user" element ={<User/>}></Route> */}
        </Routes>
    );
}

export default App;