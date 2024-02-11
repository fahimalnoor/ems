package com.softonech.ems.service.impl;

import com.softonech.ems.dto.EmployeeDto;
import com.softonech.ems.entity.Employee;
import com.softonech.ems.mapper.EmployeeMapper;
import com.softonech.ems.repository.EmployeeRepository;
import com.softonech.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
