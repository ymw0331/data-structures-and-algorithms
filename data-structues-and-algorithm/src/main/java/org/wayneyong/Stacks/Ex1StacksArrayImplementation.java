package org.wayneyong.Stacks;

/**
 * Stack:
 * - Abstract data type
 * - LIFO - last in, first out (no random access, only the top item to be removed/accessed)
 * -    push - adds an item as the top item on the stack
 * -    pop - removes the top item on the stack
 * -    peek - gets the top item on the stack without popping it
 * - Ideal backing data structure: Linked List
 * <p>
 * Time Complexity:
 * - O(1) for push, pop, and peek when using a linked list
 * - If you use an array, then push is O(n), because the array may have to be resized
 * - If you know the maximum number of items that will ever be on that stack, an array can be good choice
 * - If memory is tight, an array might be a good choice
 * - Linked list is ideal
 */

public class Ex1StacksArrayImplementation {
    public static void main(String[] args) {

        ArrayStack stack = new ArrayStack(10);
        stack.push(new Employee("Jane", "Jones", 123));
        stack.push(new Employee("John", "Doe", 4567));
        stack.push(new Employee("Mary", "Smith", 22));
        stack.push(new Employee("Mike", "Wilson", 3245));
        stack.push(new Employee("Bill", "End", 3245));


        System.out.println(stack.peek());
//        stack.printStack();
        System.out.println("Popped:" + stack.pop());
        System.out.println(stack.peek());

    }
}
