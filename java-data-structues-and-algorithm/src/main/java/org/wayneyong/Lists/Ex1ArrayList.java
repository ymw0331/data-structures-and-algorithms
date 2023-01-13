package org.wayneyong.Lists;

import java.util.ArrayList;
import java.util.List;

/***
 * Pros:
 * - good to access if index is known
 * - good for iterating over the items in the list but not for inserting item at the end and removing item without the index
 * */

public class Ex1ArrayList {

    public static void main(String[] args) {
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(new Employee("Jane", "Jones", 123));
        employeeList.add(new Employee("John", "Doe", 4567));
        employeeList.add(new Employee("Mary", "Smith", 22));
        employeeList.add(new Employee("Mike", "Wilson", 3245));

//        employeeList.forEach(employee -> System.out.println(employee));
//        System.out.println(employeeList.get(1)); //random access in constant time O(1)
//        System.out.println(employeeList.isEmpty());

        employeeList.set(1, new Employee("John", "Adams", 4568));
//        System.out.println(employeeList.size());
//        employeeList.add(3, new Employee("Wayne", "Yong", 4567));

        Employee[] employeeArray = employeeList.toArray(new Employee[employeeList.size()]);
        for (Employee employee : employeeArray) {
            System.out.println(employee);
        }

        System.out.println(employeeList.contains(new Employee("Mary", "Smith", 22)));
        System.out.println(employeeList.indexOf(new Employee("John", "Doe", 4567)));

        employeeList.remove(2);
        employeeList.forEach(employee -> System.out.println(employee));
    }
}
