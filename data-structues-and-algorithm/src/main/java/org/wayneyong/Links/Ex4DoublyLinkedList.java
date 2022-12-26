package org.wayneyong.Links;

import java.util.ArrayList;
import java.util.List;

/**
 * Doubly Linked List
 * - Each item in the list has next and previous fields
 * - The list has a head and a tail
 * <p>
 * Insert at head =>
 * - Create a new node "Bill"
 * - Assign "Jane" to Bill's next field
 * - Assign whatever Jane is pointing to as previous to Bill's previous field
 * - Assign "Bill" to Jane's previous field
 * - Assign head to "Bill"
 * - O(1) time complexity
 * <p>
 * Insert at tail =>
 * - Create a new node "Bill"
 * - Assign tail's next field to Bill's next field
 * - Assign tail to Bill's previous field
 * - Assign tail's next field to "Bill"
 * - Assign tail to "Bill"
 * - O(1) time complexity
 * <p>
 * To insert a node A between nodes B and C =>
 * - Assign A's next field to B's next field
 * - Assign A's previous field to C's previous field
 * - Assign B's next field to A
 * - Assign C's previous field to A
 * - O(1) time complexity BUT we have to find the insertion position first, so this is actually O(n)
 */


public class Ex4DoublyLinkedList {
    public static void main(String[] args) {
        Employee janeJones = new Employee("Jane", "Jones", 123);
        Employee johnDoe = new Employee("John", "Doe", 4567);
        Employee marySmith = new Employee("Mary", "Smith", 22);
        Employee mikeWilson = new Employee("Mike", "Wilson", 3245);

        EmployeeDoublyLinkedList list = new EmployeeDoublyLinkedList();

        list.addToFront(janeJones);
        list.addToFront(johnDoe);
        list.addToFront(marySmith);
        list.addToFront(mikeWilson);

        list.printList();
        System.out.println();
        System.out.println(list.getSize());

        Employee billEnd = new Employee("Bill", "End", 78);
        list.addToEnd(billEnd);
        list.printList();
        System.out.println();
        System.out.println(list.getSize());

        list.removeFromFront();
        list.printList();
        System.out.println();
        System.out.println(list.getSize());

        list.removedFromEnd();
        list.printList();
        System.out.println();
        System.out.println(list.getSize());

    }
}
