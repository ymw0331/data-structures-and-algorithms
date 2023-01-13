package org.wayneyong.Arrays;

/**
 * Retrieve an Element from an Array
 * 1. Multiply the size of the element by its index
 * 2. Get the start address of the array
 * 3. Add the start address to the result of the multiplication
 *
 * Number of elements       Steps to retrieve
 *  1                           3
 *  1000                        3
 *  100000                      3
 *  1000000                     3
 *  1000000000                  3
 *
 *  Steps to retrieve => constant time complexity O(1)
 *  As number of items increases, item doesn't degrade at all
 *
 *  Advantages: retrieving an element of an array based on index can be done in O(1) time
 *  Disadvantage:
 *
 */

public class Ex3BigOForArraysOperations {
    public static void main(String[] args) {
        int[] intArray = new int[7];

        intArray[0] = 20;
        intArray[1] = 35;
        intArray[2] = -15;
        intArray[3] = 7;
        intArray[4] = 55;
        intArray[5] = 1;
        intArray[6] = -22;

        int index = -1;
        for (int i = 0; i < intArray.length; i++) {
            if(intArray[i] == 7){
                index = i;
                break;
            }
            /**
             * Worst case:
             * - Get index based on value (7), search and loop through entire array before value found
             * - n = 7, loop n times, linear complexity
             * - retrieval when index is known == O(1)
             * - retrieval when index is not known == O(n) , find the item first then loop thru entire array
             * */
        }

        System.out.println("index = " + index);

    }
}

/**
 * Operation                                             Time Complexity
 * Retrieve with index                                      O(1) - constant time
 * Retrieve without index                                   O(n) - linear time
 * Add an element to a full array                           O(n) -- create brand new array then copy it over, loop over entire array
 * Add an element to the ene fo an array(has space)         O(1)
 * Insert or update an element at a specific index          O(1)
 * Delete an element by setting it to null                  O(1)
 * Delete an element by shifting the element                O(n)
 *
 * If the code require a loop, its linear time
 * else does not require a loop, its constant time
 * */