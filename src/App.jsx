 import './App.css';
import EmployeeComponent from './Component/EmployeeComponent'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'

import ListEmployeeComponent from './Component/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
 
    <HeaderComponent/>
    <Routes>
    {/* //http://localhost:3000 */}
    <Route path='/' element ={<ListEmployeeComponent/>}/>
    
    {/* //http://localhost:3000/employee */}
    <Route path='/employee' element ={<ListEmployeeComponent/>}/>


    {/*  //http://localhost:3000/add-employee */}
    <Route path='/add-employee' element={<EmployeeComponent/>}/>
    

    <Route path='/update-employee/:id' element={<EmployeeComponent/>}/>
    </Routes>
    {/* <FooterComponent/> */}
    </BrowserRouter>
    </>
  )
}

export default App;
