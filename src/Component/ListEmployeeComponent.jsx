import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error('Error fetching employee list:', error);
            });
    }

    function addNewEmployee() {
        navigate('/add-employee');
    }

    function updateEmployee(id) {
        navigate(`/update-employee/${id}`);
    }

    function removeEmployee(id) {
        console.log('Deleting employee with id:', id);
        deleteEmployee(id)
            .then((response) => {
                console.log('Employee deleted successfully:', response);
                getAllEmployees();
            })
            .catch((error) => {
                console.error('Error deleting employee:', error);
                alert('Failed to delete employee');
            });
    }

    return (
        <div className="container mb-5">
            <h2 className="text-center mb-4">List Of Employee</h2>
            <button className="btn btn-primary mb-3" onClick={addNewEmployee}>
                Add Employee
            </button>
            <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Employee Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>
                                <button
                                    className="btn btn-info "
                                    onClick={() => updateEmployee(employee.id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeEmployee(employee.id)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
