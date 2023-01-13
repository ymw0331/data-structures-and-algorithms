package org.wayneyong.Lists;

import java.util.Iterator;
import java.util.LinkedList;

/**
 * JDK Linked list
 * - Doubly linked list
 * - not synchronised
 **/

public class Ex5LinkedListJDK {

    public static void main(String[] args) {
        Employee janeJones = new Employee("Jane", "Jones", 123);
        Employee johnDoe = new Employee("John", "Doe", 4567);
        Employee marySmith = new Employee("Mary", "Smith", 22);
        Employee mikeWilson = new Employee("Mike", "Wilson", 3245);
        Employee billEnd = new Employee("Bill", "End", 78);

        LinkedList<Employee> list = new LinkedList<>();
        list.addFirst(janeJones);
        list.addFirst(johnDoe);
        list.addFirst(marySmith);
        list.addFirst(mikeWilson);

        Iterator iterator = list.iterator();
        System.out.print("HEAD -> ");
        while (iterator.hasNext()) {
            System.out.print(iterator.next());
            System.out.print(" <=> ");
        }
        System.out.print("null");
        System.out.println();


        list.addLast(billEnd);
        iterator = list.iterator();
        System.out.print("HEAD -> ");
        while (iterator.hasNext()) {
            System.out.print(iterator.next());
            System.out.print(" <=> ");
        }
        System.out.print("null");

        System.out.println();
        list.removeFirst();
        iterator = list.iterator();
        System.out.print("HEAD -> ");
        while (iterator.hasNext()) {
            System.out.print(iterator.next());
            System.out.print(" <=> ");
        }
        System.out.print("null");


        System.out.println();
        list.removeLast();
        iterator = list.iterator();
        System.out.print("HEAD -> ");
        while (iterator.hasNext()) {
            System.out.print(iterator.next());
            System.out.print(" <=> ");
        }
        System.out.print("null");
//        for (Employee employee : list) {
//            System.out.println(employee);
//        }
    }
}
