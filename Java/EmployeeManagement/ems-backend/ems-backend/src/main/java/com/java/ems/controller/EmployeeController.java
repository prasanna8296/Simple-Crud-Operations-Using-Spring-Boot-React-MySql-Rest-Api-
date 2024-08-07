package com.java.ems.controller;

import com.java.ems.dto.EmployeeDto;
import com.java.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //build add employee rest api
@PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
       EmployeeDto savedEmployee= employeeService.createEmployee(employeeDto);
       return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //build get employee rest api

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto>getEmployeeById(@PathVariable("id") Long employeeId){
    EmployeeDto employeeDto=employeeService.getEmployeeById(employeeId);
    return ResponseEntity.ok(employeeDto);
    }

    //build get all employee rest api
@GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
    List<EmployeeDto>employees=employeeService.getAllEmployees();
    return ResponseEntity.ok(employees);
    }
    //Build update employee rest api

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updatedEmployee){
    EmployeeDto employeeDto=employeeService.updateEmployee(employeeId,updatedEmployee);
    return ResponseEntity.ok(employeeDto);
    }

    //Build delete employee rest api
@DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
    employeeService.deleteEmployee(employeeId);
    return ResponseEntity.ok("Employee deleted successfully!.");
    }
}
