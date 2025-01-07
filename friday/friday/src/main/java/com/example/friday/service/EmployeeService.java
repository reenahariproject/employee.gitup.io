package com.example.friday.service;


import com.example.friday.entity.Employee;
import com.example.friday.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getAllEmployees() {
        return repository.findAll();

    }

    public Employee getEmployeeById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Employee createEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Employee updateEmployee(Integer id, Employee employee) {
        Employee employee1 = getEmployeeById(id);
        employee1.setName(employee.getName());
        employee1.setEmail(employee.getEmail());
        employee1.setDepartment(employee.getDepartment());
        return repository.save(employee1);





    }
    public void deleteEmployeeById(int id) {
        repository.deleteById(id);
    }





















}
