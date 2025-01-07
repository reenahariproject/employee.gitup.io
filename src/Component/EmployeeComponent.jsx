import React,{useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';
const EmployeeComponent = () => {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[department, setDepartment] = useState('')

  const{ id } = useParams();

  const navigator = useNavigate('');


  useEffect(() => {
   

    if(id){
        getEmployee(id).then((response) => {
            setName(response.data.name);
            setEmail(response.data.email);
            setDepartment(response.data.department);
        }).catch(error => {
            console.error(error);
        });
    }
  },[id]);



function saveorupateEmployee(e){
    e.preventDefault();

    const employee = {name, email, department};
     
    if (id) {
        console.log('Updating employee with ID:', id);
        console.log('Employee data:', employee)
        updateEmployee(id, employee)
          .then((response) => {
            console.log('Employee updated:', response.data);
            navigator('/employee'); 
          })
          .catch((error) => {
            console.error('Error updating employee:', error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log('Employee added:', response.data);
            navigator('/employee'); 
          })
          .catch((error) => {
            console.error('Error adding employee:', error);
          });
      }
    }
  
    

function pageTitle(){
    if(id){
        return<h2 className='text-center'>Update employee</h2>
    }else{
       return <h2 className='text-center'>Add employee</h2>
    }
}

  return (
    <div>
        <div className='conatiner mt-5'>
            <div className='row'>
                <div className='col-md-6 col-lg-12'>
                   {
                    pageTitle()
                   }
                   
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name</label>
                                <input
                                type='text'
                                placeholder='Enter Employee Name'
                                name='name'
                                value={name}
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                type='text'
                                placeholder='Enter Employee Email'
                                name='name'
                                value={email}
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Department</label>
                                <input
                                type='text'
                                placeholder='Enter Employee Department'
                                name='department'
                                value={department}
                                className='form-control'
                                onChange={(e) => setDepartment(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={saveorupateEmployee}>Sumbit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
      





    </div>
  )
}

export default EmployeeComponent;
