import axios from "axios";

const REST_API_BASE_URL ="http://localhost:8080/hari/get";

export const listEmployees = () => axios.get(REST_API_BASE_URL);

const CREATE_EMPLOYEE_URL = "http://localhost:8080/hari/post";

export const createEmployee = (employee) => axios.post(CREATE_EMPLOYEE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

const UPDATE_EMPLOYEE_URL = "http://localhost:8080/hari/put"; 
export const updateEmployee = (employeeId, employee) => axios.put(`${UPDATE_EMPLOYEE_URL}/${employeeId}`, employee);


const DELETE_EMPLOYEE_URL =  "http://localhost:8080/hari/delete"

export const deleteEmployee = (employeeId) => axios.delete(`${DELETE_EMPLOYEE_URL}/${employeeId}`);


