package com.learn.Learn.repository;
import com.learn.Learn.entity.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
