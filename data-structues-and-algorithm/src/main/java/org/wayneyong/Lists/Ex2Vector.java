package org.wayneyong.Lists;

import java.util.List;
import java.util.Vector;

/***
 * Vector came since JDK 1.2
 * - Thread safety implementation (if not needed, can go to ArrayList)
 * - synchronised
 */


public class Ex2Vector {

    public static void main(String[] args) {
        List<Employee> employeeList = new Vector<>();
        employeeList.add(new Employee("Jane", "Jones", 123));
        employeeList.add(new Employee("John", "Doe", 4567));
        employeeList.add(new Employee("Mary", "Smith", 22));
        employeeList.add(new Employee("Mike", "Wilson", 3245));


    }
}
